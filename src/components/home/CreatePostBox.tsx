import { useState } from "react";
import { Post } from "../../pages/Home";

const CreatePostBox = ({
  onCreateNewPost,
}: {
  onCreateNewPost: (post: Post) => void;
}) => {
  const [newPostContent, setNewPostContent] = useState("");

  const handleCreatePost = () => {
    if (newPostContent.trim() === "") {
      return;
    }
    const newPost: Post = {
      id: Date.now(),
      username: "john_doe",
      timestamp: new Date().toLocaleString(),
      content: newPostContent,
      comments: [],
      userProfilePic:
        "https://i.pinimg.com/236x/54/6b/2d/546b2d4e9bddbcb894fa8e416739339b.jpg",
    };

    onCreateNewPost(newPost);
    setNewPostContent("");
  };

  return (
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
  );
};

export default CreatePostBox;
