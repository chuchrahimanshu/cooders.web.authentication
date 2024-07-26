import React from "react";
import { FormProps } from "../types/components/props.types";

const Form: React.FC<FormProps> = ({
  children,
  handleFormSubmit,
  id,
  heading,
}) => {
  return (
    <form
      className="bg-SECONDARY_BACKGROUND py-5 px-6 rounded-2xl flex flex-col gap-4 shadow-sm"
      id={id}
      onSubmit={handleFormSubmit}>
      <h1 className="text-[22px] text-white font-semibold mb-2">{heading}</h1>
      {children}
    </form>
  );
};

export default Form;
