import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { AuthenticateState } from "../types/pages/state.types";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global/event.types";
import { validateEmailAddress } from "../utils/validation.util";
import toast from "react-hot-toast";
import Button from "../components/Button";
import Social from "../components/Social";
import AuthenticateInputs from "../components/AuthenticateInputs";

const Authenticate: React.FC = () => {
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

  const handleFormSubmit = (event: FormSubmitInterface) => {
    event.preventDefault();

    const { email } = formData;

    if (!validateEmailAddress(email)) {
      return toast.error("Please provide a valid Email Address");
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
