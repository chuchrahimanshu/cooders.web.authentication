import React, { useEffect, useState } from "react";
import { SignUpState } from "../types/pages.types";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global.types";
import Button from "../components/form/Button";
import Form from "../components/form/Form";
import SignUpInputs from "../components/input/SignUpInputs";
import Social from "../components/global/Social";
import {
  validateEmailAddress,
  validateOnlyAlphabets,
  validatePassword,
  validateUsername,
} from "../utils/validation.util";
import toast from "react-hot-toast";
import { generateRandomPassword } from "../utils/helper.util";
import CheckboxInput from "../components/form/CheckboxInput";

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
      <section className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center mb-2 md:mb-0">
        <CheckboxInput />
        <p className="text-base-text text-sm font-medium">
          Back to Cooder?{" "}
          <span className="text-highlight-border hover:text-action-button cursor-pointer">
            Sign In
          </span>
        </p>
      </section>
      <Button disabled={formDisabled} title="Sign Up" type="submit" />
      <Social />
    </Form>
  );
};

export default SignUp;
