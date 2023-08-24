import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { isLoggedIn } from "./utils/auth";

export type ModalType = "login" | "register";

const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn() ? <Navigate to="/home" replace={true} /> : <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: isLoggedIn() ? <Home /> : <Navigate to="/" replace={true} />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
