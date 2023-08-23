import { ModalType } from "../App";

const Register = ({
  toggleModal,
}: {
  toggleModal: (type: ModalType) => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"></div>
  );
};

export default Register;
