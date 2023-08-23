import { useState } from "react";
import CreatePostBox from "../components/home/CreatePostBox";
import Description from "../components/home/Description";

export type Post = {
  id: number;
  username: string;
  userProfilePic: string;
  timestamp: string;
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
          <div key={post.id} className="post">
            <div className="user-profile">
              <img src={post.userProfilePic} alt="User Profile" />
              <span>{post.username}</span>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
              <div className="post-details">
                <span>{post.timestamp}</span>
                <span>
                  <i className="fa fa-comments" />
                  {post.comments.length} Comments
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
