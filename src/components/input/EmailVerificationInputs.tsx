import React from "react";
import InputContainer from "../form/InputContainer";
import OTPInput from "../form/OTPInput";
import { OTPInputsProps } from "../../types/components.types";

const EmailVerificationInputs: React.FC<OTPInputsProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <>
      <InputContainer
        form="emailverification"
        id="emailverification-username"
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
        id="emailverification-otp"
        form="emailverification"
      />
    </>
  );
};

export default EmailVerificationInputs;
