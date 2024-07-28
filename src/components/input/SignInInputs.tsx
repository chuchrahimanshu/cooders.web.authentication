import React from "react";
import InputContainer from "../form/InputContainer";
import { SignInInputsProps } from "../../types/components.types";

const SignInInputs: React.FC<SignInInputsProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <>
      <InputContainer
        form="signin"
        id="signin-username"
        name="username"
        onChange={handleInputChange}
        placeholder="johndoe"
        required={true}
        title="Username"
        type="text"
        value={formData.username}
      />
      <InputContainer
        form="signin"
        id="signin-password"
        name="password"
        onChange={handleInputChange}
        placeholder="Johndoe@123"
        required={true}
        title="Password"
        type="password"
        value={formData.password}
      />
    </>
  );
};

export default SignInInputs;
