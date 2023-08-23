import { ModalType } from "./App";

export const LABELS: { [key in ModalType]: any } = {
  login: {
    label: "WELCOME BACK",
    subLabel: "Log into your account",
    footerLabel: " Not registered yet?",
    footerLinkLabel: "Register →",
    buttonLabel: "Login now",
    username: "Email or username",
    usernamePlaceholder: "Enter your email or username",
  },
  register: {
    label: "SIGN UP",
    subLabel: "Create an account to continue",
    footerLabel: "Already have an account?",
    footerLinkLabel: "Login →",
    buttonLabel: "Continue",
    username: "username",
    usernamePlaceholder: "Enter your username",
  },
};
