import React from "react";
import Label from "./Label";
import { InputContainerProps } from "../types/components/props.types";
import Input from "./Input";

const InputContainer: React.FC<InputContainerProps> = ({
  form,
  id,
  name,
  placeholder,
  required,
  title,
  type,
  value,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <section>
      <Label form={form} id={id} title={title} />
      <Input
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </section>
  );
};

export default InputContainer;
