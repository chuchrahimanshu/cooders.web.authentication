import React from "react";
import { ButtonProps } from "../types/components/props.types";

const Button: React.FC<ButtonProps> = ({ title, type, disabled }) => {
  return (
    <button
      type={type}
      className="bg-transparent mt-2 rounded-xl flex justify-center items-center hover:bg-PRIMARY_BUTTON py-2 border-[2px] border-PRIMARY_BUTTON disabled:border-PRIMARY_BORDER disabled:hover:bg-transparent disabled:cursor-not-allowed cursor-pointer"
      disabled={disabled}>
      <span className="text-base font-medium text-white ">{title}</span>
    </button>
  );
};

export default Button;
