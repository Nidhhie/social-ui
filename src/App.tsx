import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { isLoggedIn } from "./utils/auth";

export type ModalType = "login" | "register";
const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn() ? <Navigate to="/home" replace /> : <Login />}
          />
          <Route
            path="/home"
            element={
              isLoggedIn() ? (
                <Home isBlur={false} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
