import React from "react";
import { LabelProps } from "../types/components/props.types";

const Label: React.FC<LabelProps> = ({ id, title, form }) => {
  return (
    <label htmlFor={id} form={form} aria-label="">
      {title}
    </label>
  );
};

export default Label;
