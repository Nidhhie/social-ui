const isValidEmail = (email: string) => {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateInputs = (
  password: string,
  username?: string,
  email?: string,
  isLogin?: boolean
) => {
  const newErrors: any = {};

  if (!username) {
    newErrors.username = "Username is required";
  }
  if (!isLogin) {
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }
  }

  if (!password) {
    newErrors.password = "Password is required";
  } else if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters long";
  }

  return newErrors;
};
