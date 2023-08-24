import { useState } from "react";
import { ModalType } from "../App";
import LoginForm from "../components/login/LoginForm";
import Modal from "../components/Modal";

const Login = () => {
  const [modalType, setModalType] = useState<ModalType | null>("login");

  const toggleModal = (type: ModalType | null) => {
    setModalType(type);
  };

  return (
    <Modal>
      <LoginForm toggleModal={toggleModal} modalType={modalType!} />
    </Modal>
  );
};

export default Login;
