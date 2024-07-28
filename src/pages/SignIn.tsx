import React, { useEffect, useState } from "react";
import Form from "../components/form/Form";
import SignInInputs from "../components/input/SignInInputs";
import Button from "../components/form/Button";
import Social from "../components/global/Social";
import { SignInState } from "../types/pages.types";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global.types";
import { validatePassword, validateUsername } from "../utils/validation.util";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

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

  const handleForgetPasswordNavigation = () => {
    if (!formData.username?.trim()) {
      return toast.error("Enter Username to Forget Password");
    }

    navigate("/change-password", {
      state: { email: formData.username },
    });
  };

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Sign In"
      id="signin"
      showSkip={true}
      handleSkipClicked={handleSkipClicked}>
      <SignInInputs formData={formData} handleInputChange={handleInputChange} />
      <p
        className="text-highlight-border text-center mb-1 md:-mb-[10px] -mt-1 cursor-pointer hover:text-action-button text-sm"
        onClick={handleForgetPasswordNavigation}>
        Forget Password
      </p>
      <Button disabled={formDisabled} title="Sign In" type="submit" />
      <Social />
    </Form>
  );
};

export default SignIn;
