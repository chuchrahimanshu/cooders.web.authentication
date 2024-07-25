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
  onFocus,
  onBlur,
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
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
