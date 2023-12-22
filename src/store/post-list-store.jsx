import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

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
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = useCallback(
    (post) => {
      dispatchPostList({
        type: "ADD_POST",
        payload: post,
      });
    },
    [dispatchPostList]
  );
  const addInitialPosts = useCallback(
    (posts) => {
      dispatchPostList({
        type: "ADD_INITIAL_POSTS",
        payload: {
          posts,
        },
      });
    },
    [dispatchPostList]
  );

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: { postId },
      });
    },
    [dispatchPostList]
  );

  // useEffect(() => {
  //   setFetching(true);

  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })     //        USE Router to load
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
