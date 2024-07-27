import React from "react";
import InputContainer from "./InputContainer";
import { ChangePasswordInputsProps } from "../types/components/props.types";

const ChangePasswordInputs: React.FC<ChangePasswordInputsProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <>
      <InputContainer
        form="changepassword"
        id="changepassword-username"
        name="email"
        onChange={handleInputChange}
        placeholder="johndoe@gmail.com"
        required={true}
        title="Email Address"
        type="text"
        value={formData.email}
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
