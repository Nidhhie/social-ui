import { useState } from "react";
import { ModalType } from "../../App";
import TextInput from "./../TextInput";
import { LABELS } from "../../constants";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = ({
  toggleModal,
  modalType,
}: {
  toggleModal: (type: ModalType | null) => void;
  modalType: ModalType;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const isLoginScreen = modalType === "login";

  const { handleLogin, errors, setErrors } = useLogin(
    username,
    password,
    email,
    toggleModal,
    isLoginScreen
  );

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
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
        id={"username"}
        label={LABELS[modalType].username}
        placeholder={LABELS[modalType].usernamePlaceholder}
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
        type="password"
        onKeyDown={onKeyDown}
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

export default LoginForm;
