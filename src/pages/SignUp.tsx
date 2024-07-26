import React, { useEffect, useState } from "react";
import { SignUpState } from "../types/pages/state.types";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global/event.types";
import Button from "../components/Button";
import Form from "../components/Form";
import SignUpInputs from "../components/SignUpInputs";
import Social from "../components/Social";

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
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    if (
      formData.firstName?.trim() &&
      formData.lastName?.trim() &&
      formData.email?.trim() &&
      formData.username?.trim() &&
      formData.password?.trim() &&
      formData.confirmPassword?.trim()
    ) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [formData]);

  const handleFormSubmit = (event: FormSubmitInterface) => {
    event.preventDefault();
  };
  const handleInputChange = (event: FormChangeInterface) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSkipClicked = () => {};

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Sign Up"
      id="signup"
      showSkip={true}
      handleSkipClicked={handleSkipClicked}>
      <SignUpInputs formData={formData} handleInputChange={handleInputChange} />
      <Button disabled={formDisabled} title="Sign Up" type="submit" />
      <Social />
    </Form>
  );
};

export default SignUp;
