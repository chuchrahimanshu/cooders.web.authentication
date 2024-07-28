import React from "react";
import InputContainer from "./InputContainer";
import { AuthenticateInputsProps } from "../types/components/props.types";

const AuthenticateInputs: React.FC<AuthenticateInputsProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <>
      <InputContainer
        form="authenticate"
        id="authenticate-email"
        name="email"
        onChange={handleInputChange}
        placeholder="johndoe@gmail.com"
        required={true}
        title="Email Address"
        type="email"
        value={formData.email}
      />
    </>
  );
};

export default AuthenticateInputs;
