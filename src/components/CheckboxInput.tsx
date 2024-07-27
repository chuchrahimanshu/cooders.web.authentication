import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const CheckboxInput: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <label className="flex items-center gap-2 ml-1 relative">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <span
        className={`w-4 h-4 inline-flex items-center justify-center bg-gray-200 border border-gray-300 cursor-pointer rounded-md relative ${
          isChecked
            ? "bg-action-button border-transparent cursor-pointer"
            : "cursor-pointer"
        }`}>
        {isChecked && (
          <FaCheck
            size={11}
            className={isChecked ? " text-highlight-border" : "#ffffff"}
          />
        )}
      </span>
      <span className="text-base-text cursor-pointer text-sm">
        Remember Me!
      </span>
    </label>
  );
};

export default CheckboxInput;
