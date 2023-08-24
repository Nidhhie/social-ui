import { useState, useEffect } from "react";
import CreatePostBox from "../components/home/CreatePostBox";
import Header from "../components/home/Header";
import PostBox from "../components/home/PostBox";
import { MOCK_POSTS } from "../constants";
import { useConfig } from "../context/ConfigContext";
import { getUserDetails } from "../utils/auth";
import Login from "./Login";

export type Post = {
  id: string;
  username: string;
  userProfilePic: string;
  timestamp: Date;
  content: string;
  comments: string[];
  emoji: any;
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const { username } = getUserDetails();
  const { blur, setBlur } = useConfig();

  const onCreatePost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      {blur && <Login />}
      <div className={`my-12 mx-8 ${blur && "blur-sm"}`}>
        <Header
          heading={"Hello " + username}
          content="How are you doing today? Would you like to share something with the
        community 🤗"
          setBlur={setBlur}
        />
        <CreatePostBox onCreateNewPost={onCreatePost} />
        <div>
          {posts.map((post) => (
            <PostBox key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
