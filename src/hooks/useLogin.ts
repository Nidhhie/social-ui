import { useNavigate } from "react-router";
import { useState } from "react";
import { validateInputs } from "../utils/validations";
import { loginUser, registerUser } from "../utils/auth";
import { useConfig } from "../context/ConfigContext";

export const useLogin = (
  username: string,
  password: string,
  email: string,
  toggleModal: any,
  isLoginScreen: boolean
) => {
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();
  const { setBlur } = useConfig();

  const handleLogin = () => {
    try {
      const newErrors = validateInputs(
        password,
        username,
        email,
        isLoginScreen
      );

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else if (isLoginScreen) {
        loginUser(username, password);
        setBlur(false);
        navigate("/home");
      } else {
        registerUser(username, email, password);
        toggleModal("login");
      }
    } catch (err: any) {
      setErrors({ ...errors, err: err?.message });
    }
  };

  return {
    handleLogin,
    errors,
    setErrors,
  };
};
