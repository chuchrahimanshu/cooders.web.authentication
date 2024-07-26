import React, { useState } from "react";
import { SignUpState } from "../types/pages/state.types";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global/event.types";
import Button from "../components/Button";
import Form from "../components/Form";
import SignUpInputs from "../components/SignUpInputs";

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
    <Form handleFormSubmit={handleFormSubmit} heading="Sign Up" id="signup">
      <SignUpInputs formData={formData} handleInputChange={handleInputChange} />
      <Button disabled={true} title="Sign Up" type="submit" />
    </Form>
  );
};

export default SignUp;
