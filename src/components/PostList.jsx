import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = ({setSelectedTab}) => {
  const { postList } = useContext(PostListData);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage setSelectedTab={setSelectedTab}/>}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
