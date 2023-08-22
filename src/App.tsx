import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";

type ModalType = "" | "login" | "register";
const App: React.FC = () => {
  const [modalType, setModalType] = useState<ModalType>("");

  const toggleModal = (type: ModalType) => {
    setModalType(type);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      {modalType && (
        <div className="fixed inset-0 bg-black bg-opacity-50">
          <div className="w-96 p-6 bg-gray-800 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {modalType === "login" ? <Login /> : <Register />}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
