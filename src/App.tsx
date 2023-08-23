import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";

export type ModalType = "" | "login" | "register";
const App: React.FC = () => {
  const [modalType, setModalType] = useState<ModalType>("login");

  const toggleModal = (type: ModalType) => {
    setModalType(type);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home isBlur={!!modalType} />} />
        </Routes>
      </BrowserRouter>

      {modalType && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50">
          <div className="w-96 p-6 bg-gray-dark-500 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {modalType === "login" ? (
              <Login toggleModal={toggleModal} />
            ) : (
              <Register toggleModal={toggleModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
