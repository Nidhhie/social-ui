import { useId, useState } from "react";
import { Post } from "../../pages/Home";
import { getUserDetails } from "../../utils/auth";
import EmojiSelector from "./EmojiSelector";
const CreatePostBox = ({
  onCreateNewPost,
}: {
  onCreateNewPost: (post: Post) => void;
}) => {
  const [newPostContent, setNewPostContent] = useState("");
  const { username } = getUserDetails();
  const [emoji, setEmoji] = useState<any>();
  const id = useId();
  const handleCreatePost = () => {
    if (newPostContent.trim() === "" || !emoji) {
      return;
    }
    const newPost: Post = {
      id,
      username,
      timestamp: new Date(),
      content: newPostContent,
      comments: [],
      userProfilePic:
        "https://i.pinimg.com/236x/54/6b/2d/546b2d4e9bddbcb894fa8e416739339b.jpg",
      emoji,
    };

    onCreateNewPost(newPost);
    setNewPostContent("");
    setEmoji(null);
  };

  return (
    <div className="flex flex-col my-4 bg-gray-dark-500 p-2 rounded-lg">
      <h4 className="text-font-gray text-md mb-2"> Create Post </h4>
      <div className="relative">
        <EmojiSelector setEmoji={setEmoji} emoji={emoji} />
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="How are you feeling today?"
          className="bg-gray-dark-600 rounded-lg pt-5 pb pr-4 pl-16 w-full"
        />
      </div>
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
