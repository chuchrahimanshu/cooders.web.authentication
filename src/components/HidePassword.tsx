import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HidePasswordProps } from "../types/components/props.types";

const HidePassword: React.FC<HidePasswordProps> = ({
  showPassword,
  handleHidePassword,
  handleShowPassword,
}) => {
  return (
    <>
      {showPassword ? (
        <FaEyeSlash
          className="text-white absolute top-3 right-3 text-lg cursor-pointer hover:text-action-button"
          onClick={handleHidePassword}
        />
      ) : (
        <FaEye
          className="text-white absolute top-3 right-3 text-lg cursor-pointer hover:text-action-button"
          onClick={handleShowPassword}
        />
      )}
    </>
  );
};

export default HidePassword;
