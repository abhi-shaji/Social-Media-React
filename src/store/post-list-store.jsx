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
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Kerala",
    body: "Hi Friends I am going to kerala for my vacations. Hope to enjoy.Peace out....",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Kerala", "Enjoying"],
  },
  {
    id: "2",
    title: "Passed",
    body: "Passed my degree in BCA with good scores<.>",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelivable"],
  },
];

export default PostListProvider;