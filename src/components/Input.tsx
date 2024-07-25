import React from "react";
import { InputProps } from "../types/components/props.types";

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  placeholder,
  required,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className="bg-transparent outline-none border-[2px] border-PRIMARY_BORDER py-2 px-4 rounded-xl text-white focus:border-SECONDARY_BORDER focus:bg-transparent active:bg-transparent active:border-SECONDARY_BORDER w-[275px]"
    />
  );
};

export default Input;
