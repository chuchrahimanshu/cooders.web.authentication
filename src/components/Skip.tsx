import React from "react";
import { SkipProps } from "../types/components/props.types";

const Skip: React.FC<SkipProps> = ({ handleSkipClicked }) => {
  return (
    <button
      className="bg-transparent border-[2px] border-PRIMARY_BUTTON text-PRIMARY_BUTTON hover:bg-PRIMARY_BUTTON hover:text-white py-[3px] px-[12px] rounded-full font-semibold text-base"
      onClick={handleSkipClicked}>
      Skip
    </button>
  );
};

export default Skip;
