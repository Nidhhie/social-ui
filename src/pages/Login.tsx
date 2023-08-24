import { useState } from "react";
import { ModalType } from "../App";
import LoginForm from "../components/login/LoginForm";
import Modal from "../components/Modal";

const Login = () => {
  const [modalType, setModalType] = useState<ModalType | null>("login");
  const [open, setOpen] = useState(true);
  const toggleModal = (type: ModalType | null) => {
    setModalType(type);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open}>
      <button className="float-right" onClick={onClose}>
        {" "}
        X{" "}
      </button>
      <LoginForm toggleModal={toggleModal} modalType={modalType!} />
    </Modal>
  );
};

export default Login;
