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
}) => {
  return (
    <section className="flex flex-col gap-[6px]">
      <Label form={form} id={id} title={title} required={required} />
      <Input
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </section>
  );
};

export default InputContainer;
