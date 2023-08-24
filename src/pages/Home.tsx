import { useState } from "react";
import CreatePostBox from "../components/home/CreatePostBox";
import Header from "../components/home/Header";
import PostBox from "../components/home/PostBox";
import { MOCK_POSTS } from "../constants";

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

  const onCreatePost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="my-12 mx-8">
      <Header
        heading={"Hello Jane"}
        content="How are you doing today? Would you like to share something with the
        community 🤗"
      />
      <CreatePostBox onCreateNewPost={onCreatePost} />
      <div>
        {posts.map((post) => (
          <PostBox key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
