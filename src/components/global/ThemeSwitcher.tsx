import React, { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Modal from "./Modal";

const ThemeSwitcher: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <FaWandMagicSparkles
        className="cursor-pointer text-base-text bg-overlay-background p-2 text-4xl rounded-full border-2 border-base-border hover:text-action-button"
        onClick={handleShowModal}
      />
      {showModal && <Modal setShowModal={setShowModal}>Coming Soon!</Modal>}
    </>
  );
};

export default ThemeSwitcher;
