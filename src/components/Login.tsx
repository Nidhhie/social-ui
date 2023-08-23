import { useState } from "react";
import { ModalType } from "../App";
import TextInput from "./TextInput";

const Login = ({ toggleModal }: { toggleModal: (type: ModalType) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check if credentials are present in local storage and login the user
  };

  const onClickRegister = () => {
    toggleModal("register");
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-font-gray-dark text-md"> WELCOME BACK </div>
      <div className="text-lg font-bold">Log into your account</div>
      <TextInput
        id={"username"}
        label="Email or username"
        placeholder="Enter your email or username"
        value={username}
        onChange={onChangeUsername}
      />

      <TextInput
        id={"password"}
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={onChangePassword}
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Login now
      </button>
      <p className="mt-2">
        Not registered yet?{" "}
        <button onClick={onClickRegister} className="text-blue-500">
          Register →
        </button>
      </p>
    </div>
  );
};

export default Login;
