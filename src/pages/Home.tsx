import { useState } from "react";
import CreatePostBox from "../components/home/CreatePostBox";
import Description from "../components/home/Description";
import ReadableTime from "../components/home/ReadableTime";
import { calculateTimeDifference } from "../utils/time";

export type Post = {
  id: number;
  username: string;
  userProfilePic: string;
  timestamp: Date;
  content: string;
  comments: string[];
};

const Home = ({ isBlur }: any) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const onCreatePost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="my-12 mx-8">
      <Description
        heading={"Hello Jane "}
        content="How are you doing today? Would you like to share something with the
        community 🤗"
      />
      <CreatePostBox onCreateNewPost={onCreatePost} />

      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col my-4 bg-gray-dark-500 p-2"
          >
            <div className="flex mb-4">
              <img
                src={post.userProfilePic}
                alt="User Profile"
                className="h-12 w-12 object-cover"
                style={{ borderRadius: 24 }}
              />
              <div className="pl-4">
                <div>{post.username}</div>
                <ReadableTime timestamp={post.timestamp} />
              </div>
            </div>
            <div className="bg-gray-dark-600 p-4">
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
