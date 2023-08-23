import { useState } from "react";
import { ModalType } from "../App";
import { loginUser, registerUser } from "../utils/auth";
import { validateInputs } from "../utils/validations";
import TextInput from "./TextInput";

const LABELS: { [key in ModalType]: any } = {
  login: {
    label: "WELCOME BACK",
    subLabel: "Log into your account",
    footerLabel: " Not registered yet?",
    footerLinkLabel: "Register →",
    buttonLabel: "Login now",
  },
  register: {
    label: "SIGN UP",
    subLabel: "Create an account to continue",
    footerLabel: "Already have an account?",
    footerLinkLabel: "Login →",
    buttonLabel: "Continue",
  },
};

const Login = ({
  toggleModal,
  modalType,
}: {
  toggleModal: (type: ModalType) => void;
  modalType: ModalType;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<any>({});
  const isLoginScreen = modalType === "login";

  const handleLogin = () => {
    try {
      const newErrors = validateInputs(password, username, "", isLoginScreen);

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else if (isLoginScreen) {
        loginUser(username, password);
      } else {
        registerUser(username, password);
      }
    } catch (err: any) {
      setErrors({ ...errors, err: err?.message });
    }
  };

  const onClickRegisterOrLogin = () => {
    toggleModal(isLoginScreen ? "register" : "login");
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, username: "", err: "" });
    setUsername(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, email: "", err: "" });
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, password: "", err: "" });
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-font-gray-dark text-md">
        {" "}
        {LABELS[modalType].label}
      </div>
      <div className="text-lg font-bold mb-4">{LABELS[modalType].subLabel}</div>
      <TextInput
        id={"username"}
        label="Email or username"
        placeholder="Enter your email or username"
        value={username}
        onChange={onChangeUsername}
        error={errors.username}
      />
      {!isLoginScreen && (
        <TextInput
          id={"email"}
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={onChangeEmail}
          error={errors.email}
        />
      )}

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
        {LABELS[modalType].buttonLabel}
      </button>
      {errors.err && <div className="text-red-500 my-2">{errors.err}</div>}
      <p className="mt-2">
        {LABELS[modalType].footerLabel}
        <button onClick={onClickRegisterOrLogin} className="text-blue-500">
          <b>
            <u> {LABELS[modalType].footerLinkLabel} </u>
          </b>
        </button>
      </p>
    </div>
  );
};

export default Login;
