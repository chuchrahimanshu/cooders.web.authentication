import React from "react";
import InputContainer from "./InputContainer";
import { EmailVerificationInputsProps } from "../types/components/props.types";
import OTPInput from "./OTPInput";

const EmailVerificationInputs: React.FC<EmailVerificationInputsProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <>
      <InputContainer
        form="emailverification"
        id="emailverification-email"
        name="email"
        placeholder="johndoe@gmail.com"
        required={true}
        title="Email Address"
        type="email"
        value={formData.email}
        disabled={true}
      />
      <OTPInput setFormData={setFormData} />
    </>
  );
};

export default EmailVerificationInputs;
