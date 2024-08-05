import React, { useEffect, useState } from "react";
import { FormSubmitInterface } from "../types/global.types";
import Form from "../components/form/Form";
import Button from "../components/form/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { OTPState } from "../types/pages.types";
import EmailVerificationInputs from "../components/input/EmailVerificationInputs";

const EmailVerification: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialState: OTPState = {
    username: location.state?.username,
    otp: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    // if (!location.state?.email) {
    //   navigate("/sessions");
    // }

    if (formData.username?.trim() && formData.otp?.trim()) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [navigate, formData, location]);

  const handleFormSubmit = (event: FormSubmitInterface) => {
    event.preventDefault();
  };

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Email Verification"
      id="emailverification"
      showSkip={false}>
      <EmailVerificationInputs formData={formData} setFormData={setFormData} />
      <Button disabled={formDisabled} title="Verify" type="submit" />
    </Form>
  );
};

export default EmailVerification;
