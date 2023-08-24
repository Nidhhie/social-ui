import { useNavigate } from "react-router";
import { logout } from "../../utils/auth";

const Header = ({
  heading,
  content,
  setBlur,
}: {
  heading: string;
  content: string;
  setBlur: any;
}) => {
  const onLogout = () => {
    logout();
    setBlur(true);
  };
  return (
    <div className="mb-4">
      <div className="flex text-font-gray-light justify-between items-center">
        <h1 className="text-3xl">{heading}</h1>
        <button
          onClick={onLogout}
          className="border-font-gray-light border text-xs py-1 px-4"
        >
          {" "}
          Logout{" "}
        </button>
      </div>
      <h2 className="text-font-gray">{content}</h2>
    </div>
  );
};
export default Header;
