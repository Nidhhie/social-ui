import { useState } from "react";
import { ModalType } from "../App";
import { loginUser } from "../utils/auth";
import TextInput from "./TextInput";

const Login = ({ toggleModal }: { toggleModal: (type: ModalType) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleLogin = () => {
    try {
      const newErrors = validateInputs();

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        loginUser(username, password);
      }
    } catch (err: any) {
      setErrors({ ...errors, err: err?.message });
    }
  };

  const onClickRegister = () => {
    toggleModal("register");
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, username: "", err: "" });
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, password: "", err: "" });
    setPassword(e.target.value);
  };

  const validateInputs = () => {
    const newErrors: any = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-font-gray-dark text-md"> WELCOME BACK </div>
      <div className="text-lg font-bold mb-4">Log into your account</div>
      <TextInput
        id={"username"}
        label="Email or username"
        placeholder="Enter your email or username"
        value={username}
        onChange={onChangeUsername}
        error={errors.username}
      />

      <TextInput
        id={"password"}
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={onChangePassword}
        error={errors.password}
      />

      <button
        onClick={handleLogin}
        className="bg-blue text-white px-4 py-2 mt-4 rounded w-full"
      >
        Login now
      </button>
      {errors.err && <div className="text-red-500 my-2">{errors.err}</div>}
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
