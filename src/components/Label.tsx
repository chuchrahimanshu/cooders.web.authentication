import React from "react";
import { LabelProps } from "../types/components/props.types";

const Label: React.FC<LabelProps> = ({ id, title, form, required }) => {
  return (
    <label
      htmlFor={id}
      form={form}
      className="text-base-text text-[14px] font-medium opacity-70">
      {title} {required && <span className="text-red-600">*</span>}
    </label>
  );
};

export default Label;
