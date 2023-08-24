import { Post } from "../../pages/Home";
import ReadableTime from "./ReadableTime";

const PostBox = ({ post }: { post: Post }) => {
  return (
    <div
      data-testid="post-box"
      className="flex flex-col my-4 bg-gray-dark-500 p-2 rounded-lg"
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
      <div className="flex bg-gray-dark-600 text-font-gray p-4">
        <div>
          <div className="w-12 h-12 bg-gray-dark-500 text-2xl rounded-full text-center p-2 mr-2 mt-1">
            {post.emoji.native}
          </div>
        </div>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostBox;
