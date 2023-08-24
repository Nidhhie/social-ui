type User = {
  username: string;
  email: string;
  password: string;
};
export const isUserRegistered = (username: string, email: string) => {
  const data = localStorage.getItem("users");
  if (data) {
    const users = JSON.parse(data);
    return (
      users.findIndex(
        (user: User) => user.username === username || user.email === email
      ) !== -1
    );
  }

  return false;
};

export const registerUser = (
  username: string,
  email: string,
  password: string
) => {
  if (isUserRegistered(username, email)) {
    throw new Error("User already registered");
  } else {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({
      username,
      email,
      password: btoa(password),
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
};

export const loginUser = (username: string, password: string) => {
  if (isUserRegistered(username, username)) {
    const users = JSON.parse(localStorage.getItem("users")!);
    const user = users.find(
      (user: User) => user.username === username || user.email === username
    );

    if (atob(user.password) === password) {
      localStorage.setItem("authenticatedUser", JSON.stringify(user));
    }
  } else {
    throw new Error("User not found");
  }
};

export const logout = () => {
  return localStorage.setItem("authenticatedUser", "");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("authenticatedUser");
};

export const getUserDetails = () => {
  return JSON.parse(localStorage.getItem("authenticatedUser") || "{}");
};
