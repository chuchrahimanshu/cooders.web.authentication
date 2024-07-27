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
import {
  validateEmailAddress,
  validateOnlyAlphabets,
  validatePassword,
  validateUsername,
} from "../utils/validation.util";
import toast from "react-hot-toast";
import { generateRandomPassword } from "../utils/helper.util";

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

    const { firstName, lastName, email, username, password, confirmPassword } =
      formData;

    if (!validateOnlyAlphabets(firstName)) {
      return toast.error("Please provide a valid First Name");
    }

    if (!validateOnlyAlphabets(lastName)) {
      return toast.error("Please provide a valid Last Name");
    }

    if (!validateEmailAddress(email)) {
      return toast.error("Please provide a valid Email Address");
    }

    if (!validateUsername(username)) {
      return toast.error("Please follow all Username rules");
    }

    if (!validatePassword(password)) {
      return toast.error("Please follow all Password rules");
    }

    if (password !== confirmPassword) {
      return toast.error("Password's didn't match");
    }
  };

  const handleInputChange = (event: FormChangeInterface) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSkipClicked = () => {};

  const handleRandomPassword = () => {
    const randomPassword: string = generateRandomPassword();
    setFormData((prevState) => ({
      ...prevState,
      ["password"]: randomPassword,
      ["confirmPassword"]: randomPassword,
    }));
  };

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Sign Up"
      id="signup"
      showSkip={true}
      handleSkipClicked={handleSkipClicked}>
      <SignUpInputs
        formData={formData}
        handleInputChange={handleInputChange}
        handleRandomPassword={handleRandomPassword}
      />
      <Button disabled={formDisabled} title="Sign Up" type="submit" />
      <Social />
    </Form>
  );
};

export default SignUp;
