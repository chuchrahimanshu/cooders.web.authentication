import React from "react";
import { SkipProps } from "../types/components/props.types";

const Skip: React.FC<SkipProps> = ({ handleSkipClicked }) => {
  return (
    <button
      className="bg-transparent border-[2px] border-action-button text-action-button hover:bg-action-button hover:text-white py-[2px] px-[8px] rounded-full font-semibold text-sm"
      onClick={handleSkipClicked}>
      Skip
    </button>
  );
};

export default Skip;
