import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { ModalProps } from "../../types/components.types";

const Modal: React.FC<ModalProps> = ({ children, setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center h-screen w-screen z-10">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-base-background opacity-70"></div>
      <div className="z-50 bg-overlay-background p-5 rounded-xl border-2 border-base-border relative">
        <section className="flex items-center justify-between min-w-96">
          <span className="text-xl text-white">🌍🤝🖥️</span>
          <RiCloseCircleLine
            className="text-[28px] text-white opacity-75 hover:text-highlight-border cursor-pointer"
            onClick={handleCloseModal}
          />
        </section>
        <section className="my-5 text-base-text">{children}</section>
      </div>
    </section>
  );
};

export default Modal;
