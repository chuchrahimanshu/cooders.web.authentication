import { ChangeEventHandler, FormEventHandler, ReactNode } from "react";
import { SignInState, SignUpState } from "../pages/state.types";
import { FormChangeInterface } from "../global/event.types";

export interface LabelProps {
  id: string;
  title: string;
  form: string;
  required: boolean;
}

export interface InputProps {
  form: string;
  type: string;
  id: string;
  name: string;
  value: string | number;
  placeholder: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  handleRandomPassword?: () => void;
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
  handleRandomPassword?: () => void;
}

export interface TwoColumnInputProps {
  children: ReactNode;
}

export interface HidePasswordProps {
  showPassword: boolean;
  handleHidePassword: () => void;
  handleShowPassword: () => void;
}

export interface ButtonProps {
  type: "submit" | "reset" | "button";
  title: string;
  disabled: boolean;
}

export interface FormProps {
  children: ReactNode;
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
  id: string;
  heading: string;
  showSkip: boolean;
  handleSkipClicked?: () => void;
}

export interface SignUpInputsProps {
  handleRandomPassword?: () => void;
  handleInputChange: (event: FormChangeInterface) => void;
  formData: SignUpState;
}

export interface SkipProps {
  handleSkipClicked: () => void;
}

export interface SignInInputsProps {
  handleInputChange: (event: FormChangeInterface) => void;
  formData: SignInState;
}
