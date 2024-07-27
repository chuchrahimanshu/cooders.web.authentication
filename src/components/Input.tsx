import React, { useState } from "react";
import { InputProps } from "../types/components/props.types";
import HidePassword from "./HidePassword";
import { RiAiGenerate } from "react-icons/ri";

const Input: React.FC<InputProps> = ({
  form,
  type,
  id,
  name,
  value,
  placeholder,
  required,
  disabled = false,
  onChange,
  handleRandomPassword,
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
            disabled={disabled}
            className="bg-transparent outline-none border-[2px] border-PRIMARY_BORDER py-2 px-4 rounded-xl text-white focus:border-SECONDARY_BORDER focus:bg-transparent active:bg-transparent active:border-SECONDARY_BORDER md:w-[300px] pr-16 w-full"
          />
          {form === "signup" && name === "password" && (
            <RiAiGenerate
              className="text-white absolute top-3 right-10 text-lg cursor-pointer hover:text-SECONDARY_BORDER"
              title="Generate Random Password"
              onClick={handleRandomPassword}
            />
          )}
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
          disabled={disabled}
          className="bg-transparent outline-none border-[2px] border-PRIMARY_BORDER py-2 px-4 rounded-xl text-white focus:border-SECONDARY_BORDER focus:bg-transparent active:bg-transparent active:border-SECONDARY_BORDER md:w-[300px] w-full disabled:cursor-not-allowed"
        />
      )}
    </>
  );
};

export default Input;
