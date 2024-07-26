import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import SignInInputs from "../components/SignInInputs";
import Button from "../components/Button";
import Social from "../components/Social";
import { SignInState } from "../types/pages/state.types";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global/event.types";
import { validatePassword, validateUsername } from "../utils/validation.util";
import toast from "react-hot-toast";

const SignIn: React.FC = () => {
  const initialState: SignInState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    if (formData.username?.trim() && formData.password?.trim()) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [formData]);

  const handleFormSubmit = (event: FormSubmitInterface) => {
    event.preventDefault();

    const { username, password } = formData;

    if (!validateUsername(username)) {
      return toast.error("Invalid Username / Password");
    }

    if (!validatePassword(password)) {
      return toast.error("Invalid Username / Password");
    }
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
      heading="Sign In"
      id="signin"
      showSkip={true}
      handleSkipClicked={handleSkipClicked}>
      <SignInInputs formData={formData} handleInputChange={handleInputChange} />
      <p className="text-SECONDARY_BORDER text-center mb-1 md:-mb-[10px] -mt-1 cursor-pointer hover:text-PRIMARY_BUTTON">
        Forget Password
      </p>
      <Button disabled={formDisabled} title="Sign In" type="submit" />
      <Social />
    </Form>
  );
};

export default SignIn;
