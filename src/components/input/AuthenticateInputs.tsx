import React from "react";
import InputContainer from "../form/InputContainer";
import { AuthenticateInputsProps } from "../../types/components.types";

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
