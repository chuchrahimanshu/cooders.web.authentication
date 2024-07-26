import React, { useState } from "react";
import { InputProps } from "../types/components/props.types";
import HidePassword from "./HidePassword";

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  placeholder,
  required,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleHidePassword = () => {
    setShowPassword(false);
  };

  const handleShowPassword = () => {
    setShowPassword(true);
  };

  return (
    <>
      {type === "password" ? (
        <section className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            className="bg-transparent outline-none border-[2px] border-PRIMARY_BORDER py-2 px-4 rounded-xl text-white focus:border-SECONDARY_BORDER focus:bg-transparent active:bg-transparent active:border-SECONDARY_BORDER md:w-[280px] pr-16 w-full"
          />
          <HidePassword
            handleHidePassword={handleHidePassword}
            handleShowPassword={handleShowPassword}
            showPassword={showPassword}
          />
        </section>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          className="bg-transparent outline-none border-[2px] border-PRIMARY_BORDER py-2 px-4 rounded-xl text-white focus:border-SECONDARY_BORDER focus:bg-transparent active:bg-transparent active:border-SECONDARY_BORDER md:w-[280px] w-full"
        />
      )}
    </>
  );
};

export default Input;
