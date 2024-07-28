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
