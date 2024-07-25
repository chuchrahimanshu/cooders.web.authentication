import { ChangeEventHandler, FocusEventHandler } from "react";

export interface LabelProps {
  id: string;
  title: string;
  form: string;
}

export interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string | number;
  placeholder: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}
