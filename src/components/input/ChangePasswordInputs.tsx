import React from "react";
import InputContainer from "../form/InputContainer";
import { ChangePasswordInputsProps } from "../../types/components.types";

const ChangePasswordInputs: React.FC<ChangePasswordInputsProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <>
      <InputContainer
        form="changepassword"
        id="changepassword-username"
        name="username"
        onChange={handleInputChange}
        placeholder="johndoe"
        required={true}
        title="Username"
        type="text"
        value={formData.username}
        disabled={true}
      />
      <InputContainer
        form="changepassword"
        id="changepassword-password"
        name="password"
        onChange={handleInputChange}
        placeholder="Johndoe@123"
        required={true}
        title="Password"
        type="password"
        value={formData.password}
      />
      <InputContainer
        form="changepassword"
        id="changepassword-confirmpassword"
        name="confirmPassword"
        onChange={handleInputChange}
        placeholder="Johndoe@123"
        required={true}
        title="Confirm Password"
        type="password"
        value={formData.confirmPassword}
      />
    </>
  );
};

export default ChangePasswordInputs;
