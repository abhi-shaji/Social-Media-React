import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => {
      return post.id !== action.payload.postId;
    });
  } else if (action.type === "NEW_POST") {
    newPostList = [
      {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        userId: action.payload.userId,
        tags: action.payload.tags,
      },
      ...currPostList,
    ];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    dispatchPostList({
      type: "NEW_POST",
      payload: {
        id: Date.now,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
