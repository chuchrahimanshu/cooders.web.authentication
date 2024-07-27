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
            ? "bg-green-600 border-transparent cursor-pointer"
            : "cursor-pointer"
        }`}>
        {isChecked && <FaCheck color="#ffffff" size={11} />}
      </span>
      <span className="text-white cursor-pointer text-sm">Remember Me!</span>
    </label>
  );
};

export default CheckboxInput;
