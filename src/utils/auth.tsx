export const isAuthenticated = (username: string, password: string) => {
  const data = localStorage.getItem(username);
  if (data) {
    let { pwd } = JSON.parse(data);
    return atob(pwd) === password;
  }
  return false;
};

export const registerUser = (username: string, password: string) => {
  localStorage.setItem(
    username,
    JSON.stringify({ pwd: btoa(password), isLoggedIn: false })
  );
};

export const loginUser = (username: string, password: string) => {
  if (isAuthenticated(username, password)) {
    localStorage.setItem(
      username,
      JSON.stringify({ pwd: btoa(password), isLoggedIn: true })
    );
  } else {
    throw new Error("User not found");
  }
};
