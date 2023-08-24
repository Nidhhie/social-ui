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
  const [error, setError] = useState("");

  const id = useId();
  const handleCreatePost = () => {
    if (newPostContent.trim() === "" || !emoji) {
      setError(!emoji ? "Please select an emoji" : "Please enter content");
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

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostContent(e.target.value);
    setError("");
  };

  const onChangeEmoji = (emoji: any) => {
    setEmoji(emoji);
    setError("");
  };

  return (
    <div
      data-testid="create-post-box"
      className="flex flex-col my-4 bg-gray-dark-500 p-2 rounded-lg"
    >
      <h4 className="text-font-gray text-md mb-2"> Create Post </h4>
      <div className="relative">
        <EmojiSelector setEmoji={onChangeEmoji} emoji={emoji} />
        <textarea
          value={newPostContent}
          onChange={onChangeContent}
          placeholder="How are you feeling today?"
          className="bg-gray-dark-600 rounded-lg pt-5 pb pr-4 pl-16 w-full"
        />
        {error && <div className="text-red-400 text-center"> {error} </div>}
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
