import React from "react";
import { OTPInputsProps } from "../../types/components.types";
import InputContainer from "../form/InputContainer";
import OTPInput from "../form/OTPInput";

const ForgetPasswordInputs: React.FC<OTPInputsProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <>
      <InputContainer
        form="forgetpassword"
        id="forgetpassword-username"
        name="username"
        placeholder="johndoe"
        required={true}
        title="Username"
        type="text"
        value={formData.username}
        disabled={true}
      />
      <OTPInput
        setFormData={setFormData}
        title="OTP"
        id="forgetpassword-otp"
        form="forgetpassword"
      />
    </>
  );
};

export default ForgetPasswordInputs;
