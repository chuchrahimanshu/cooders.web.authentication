import React, { useEffect, useState } from "react";
import Form from "../components/form/Form";
import { validateEmailAddress } from "../utils/validation.util";
import toast from "react-hot-toast";
import Button from "../components/form/Button";
import Social from "../components/global/Social";
import AuthenticateInputs from "../components/input/AuthenticateInputs";
import { AuthenticateState } from "../types/pages.types";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global.types";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Authenticate: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const initialState: AuthenticateState = {
    email: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    if (formData.email?.trim()) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [formData]);

  const handleInputChange = (event: FormChangeInterface) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event: FormSubmitInterface) => {
    event.preventDefault();

    const { email } = formData;

    if (!email?.trim() || !validateEmailAddress(email)) {
      return toast.error("Please provide a valid Email Address");
    }

    // TODO: API CALL
    navigate("/accounts/new");
  };

  const handleSkipClicked = () => {};
  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Ignite!🔥"
      id="authenticate"
      showSkip={true}
      handleSkipClicked={handleSkipClicked}>
      <AuthenticateInputs
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <Button disabled={formDisabled} title="Let's Go" type="submit" />
      <Social />
    </Form>
  );
};

export default Authenticate;
