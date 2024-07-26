import React, { useState } from "react";
import { ButtonProps } from "../types/components/props.types";

const Button: React.FC<ButtonProps> = ({ title, type, disabled }) => {
  const [hoverButton, setHoverButton] = useState(false);

  const handleButtonHover = () => {
    setHoverButton(true);
  };

  const handleButtonBlur = () => {
    setHoverButton(false);
  };

  return (
    <button
      type={type}
      className="bg-transparent mt-2 rounded-xl flex justify-center items-center py-2 border-[2px] hover:border-SECONDARY_BORDER disabled:border-PRIMARY_BORDER disabled:hover:bg-transparent disabled:cursor-not-allowed cursor-pointer disabled:opacity-50 border-PRIMARY_BORDER"
      disabled={disabled}
      onMouseOver={handleButtonHover}
      onMouseOut={handleButtonBlur}>
      <span
        className={
          hoverButton
            ? "text-base font-medium text-SECONDARY_BORDER"
            : "text-base font-medium text-white"
        }>
        {title}
      </span>
    </button>
  );
};

export default Button;
