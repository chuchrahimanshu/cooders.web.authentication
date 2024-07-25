import { ChangeEventHandler, ReactNode } from "react";

export interface LabelProps {
  id: string;
  title: string;
  form: string;
  required: boolean;
}

export interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string | number;
  placeholder: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface InputContainerProps {
  title: string;
  form: string;
  type: string;
  id: string;
  name: string;
  value: string | number;
  placeholder: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface TwoColumnInputProps {
  children: ReactNode;
}
