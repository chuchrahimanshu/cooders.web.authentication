import React from "react";
import InputContainer from "./InputContainer";
import OTPInput from "./OTPInput";
import { OTPInputsProps } from "../types/components/props.types";

const TFAInputs: React.FC<OTPInputsProps> = ({ formData, setFormData }) => {
  return (
    <>
      <InputContainer
        form="tfa"
        id="tfa-email"
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

export default TFAInputs;
