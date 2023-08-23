import { useState } from "react";
import Description from "../components/home/Description";

type Post = {
  id: number;
  username: string;
  userProfilePic: string;
  timestamp: string;
  content: string;
  comments: string[];
};
const Home = ({ isBlur }: any) => {
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  const handleCreatePost = () => {
    if (newPostContent.trim() === "") {
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      username: "john_doe",
      userProfilePic: "path_to_profile_pic",
      timestamp: new Date().toLocaleString(),
      content: newPostContent,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
  };

  return (
    <div className="my-12 mx-8">
      <Description
        heading={"Hello Jane "}
        content="How are you doing today? Would you like to share something with the
        community 🤗"
      />
      <div className="flex flex-col my-4 bg-gray-dark-500 p-2">
        <h4 className="text-font-gray text-md mb-2"> Create Post </h4>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="How are you feeling today?"
          className="bg-gray-dark-600 rounded p-4"
        />
        <button
          onClick={handleCreatePost}
          className="bg-blue w-20 self-end py-2 my-4 text-sm"
        >
          Post
        </button>
      </div>
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
