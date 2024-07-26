import React from "react";
import { SignUpInputsProps } from "../types/components/props.types";
import TwoColumnInput from "./TwoColumnInput";
import InputContainer from "./InputContainer";

const SignUpInputs: React.FC<SignUpInputsProps> = ({
  handleInputChange,
  formData,
}) => {
  return (
    <>
      <TwoColumnInput>
        <InputContainer
          form="signup"
          id="signup-firstname"
          name="firstName"
          onChange={handleInputChange}
          placeholder="John"
          required={true}
          title="First Name"
          type="text"
          value={formData.firstName}
        />
        <InputContainer
          form="signup"
          id="signup-lastname"
          name="lastName"
          onChange={handleInputChange}
          placeholder="Doe"
          required={true}
          title="Last Name"
          type="text"
          value={formData.lastName}
        />
      </TwoColumnInput>
      <TwoColumnInput>
        <InputContainer
          form="signup"
          id="signup-email"
          name="email"
          onChange={handleInputChange}
          placeholder="johndoe@gmail.com"
          required={true}
          title="Email Address"
          type="email"
          value={formData.email}
        />
        <InputContainer
          form="signup"
          id="signup-username"
          name="username"
          onChange={handleInputChange}
          placeholder="johndoe"
          required={true}
          title="Username"
          type="text"
          value={formData.username}
        />
      </TwoColumnInput>
      <TwoColumnInput>
        <InputContainer
          form="signup"
          id="signup-password"
          name="password"
          onChange={handleInputChange}
          placeholder="Johndoe@123"
          required={true}
          title="Password"
          type="password"
          value={formData.password}
        />
        <InputContainer
          form="signup"
          id="signup-confirmpassword"
          name="confirmPassword"
          onChange={handleInputChange}
          placeholder="Johndoe@123"
          required={true}
          title="Confirm Password"
          type="password"
          value={formData.confirmPassword}
        />
      </TwoColumnInput>
    </>
  );
};

export default SignUpInputs;
