const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50">
      <div className="w-96 p-6 bg-gray-dark-500 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};

export default Modal;
