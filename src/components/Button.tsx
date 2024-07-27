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
      className="bg-transparent mt-2 rounded-xl flex justify-center items-center py-2 border-[2px] hover:border-highlight-border disabled:border-base-border disabled:hover:bg-transparent disabled:cursor-not-allowed cursor-pointer disabled:opacity-50 border-base-border"
      disabled={disabled}
      onMouseOver={handleButtonHover}
      onMouseOut={handleButtonBlur}>
      <span
        className={
          hoverButton
            ? "text-base font-medium text-highlight-border"
            : "text-base font-medium text-base-text"
        }>
        {title}
      </span>
    </button>
  );
};

export default Button;
