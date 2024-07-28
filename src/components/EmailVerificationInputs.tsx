import React from "react";
import InputContainer from "./InputContainer";
import { OTPInputsProps } from "../types/components/props.types";
import OTPInput from "./OTPInput";

const EmailVerificationInputs: React.FC<OTPInputsProps> = ({
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
