import React from "react";
import { TwoColumnInputProps } from "../types/components/props.types";

const TwoColumnInput: React.FC<TwoColumnInputProps> = ({ children }) => {
  return <section className="flex gap-5">{children}</section>;
};

export default TwoColumnInput;
