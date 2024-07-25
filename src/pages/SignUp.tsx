import React, { useState } from "react";
import TwoColumnInput from "../components/TwoColumnInput";
import InputContainer from "../components/InputContainer";
import { SignUpState } from "../types/pages/state.types";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global/event.props";
import Button from "../components/Button";

const SignUp: React.FC = () => {
  const initialState: SignUpState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleFormSubmit = (event: FormSubmitInterface) => {
    event.preventDefault();
  };
  const handleInputChange = (event: FormChangeInterface) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form
      className="bg-SECONDARY_BACKGROUND py-5 px-6 rounded-2xl flex flex-col gap-4"
      id="signup"
      onSubmit={handleFormSubmit}>
      <h1 className="text-[22px] text-white font-semibold mb-2">Sign Up</h1>
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
      <Button disabled={true} title="Sign Up" type="submit" />
    </form>
  );
};

export default SignUp;
