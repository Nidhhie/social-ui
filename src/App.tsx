import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import ProtectedRoute from "./components/ProtectedRoute";
import { ConfigProvider } from "./context/ConfigContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export type ModalType = "login" | "register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default App;
