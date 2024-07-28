import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormSubmitInterface } from "../types/global/event.types";
import Form from "../components/Form";
import Button from "../components/Button";
import { OTPState } from "../types/pages/state.types";
import TFAInputs from "../components/TFAInputs";

const TwoFactorAuthentication: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialState: OTPState = {
    email: location.state?.email,
    otp: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    // if (!location.state?.email) {
    //   navigate("/sessions");
    // }

    if (formData.email?.trim() && formData.otp?.trim()) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [navigate, formData, location]);

  console.log(formData.otp);

  const handleFormSubmit = (event: FormSubmitInterface) => {
    event.preventDefault();
  };

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="TFA"
      id="tfa"
      showSkip={false}>
      <TFAInputs formData={formData} setFormData={setFormData} />
      <Button disabled={formDisabled} title="Verify" type="submit" />
    </Form>
  );
};

export default TwoFactorAuthentication;
