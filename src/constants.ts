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

export const MOCK_POSTS: any = [
  {
    id: "1",
    username: "Nidhi Deswal",
    timestamp: new Date(),
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: [],
    userProfilePic:
      "https://i.pinimg.com/236x/54/6b/2d/546b2d4e9bddbcb894fa8e416739339b.jpg",
    emoji: {
      aliases: ["hand_with_index_and_middle_fingers_crossed"],
      id: "crossed_fingers",
      keywords: ["hand", "with", "index", "and", "middle", "good", "lucky"],
      name: "Crossed Fingers",
      native: "🤞🏿",
      shortcodes: ":crossed_fingers::skin-tone-6:",
      skin: 6,
      unified: "1f91e-1f3ff",
    },
  },
  {
    id: "2",
    username: "New User",
    timestamp: new Date(),
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: [],
    userProfilePic:
      "https://i.pinimg.com/236x/54/6b/2d/546b2d4e9bddbcb894fa8e416739339b.jpg",
    emoji: {
      aliases: ["hand_with_index_and_middle_fingers_crossed"],
      id: "crossed_fingers",
      keywords: ["hand", "with", "index", "and", "middle", "good", "lucky"],
      name: "Crossed Fingers",
      native: "🤞🏿",
      shortcodes: ":crossed_fingers::skin-tone-6:",
      skin: 6,
      unified: "1f91e-1f3ff",
    },
  },
  {
    id: "3",
    username: "Nidhi Deswal",
    timestamp: new Date(),
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: [],
    userProfilePic:
      "https://i.pinimg.com/236x/54/6b/2d/546b2d4e9bddbcb894fa8e416739339b.jpg",
    emoji: {
      aliases: ["hand_with_index_and_middle_fingers_crossed"],
      id: "crossed_fingers",
      keywords: ["hand", "with", "index", "and", "middle", "good", "lucky"],
      name: "Crossed Fingers",
      native: "🤞🏿",
      shortcodes: ":crossed_fingers::skin-tone-6:",
      skin: 6,
      unified: "1f91e-1f3ff",
    },
  },
];
