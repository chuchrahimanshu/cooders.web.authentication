import React, { useEffect, useState } from "react";
import { FormSubmitInterface } from "../types/global/event.types";
import Form from "../components/Form";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { EmailVerificationState } from "../types/pages/state.types";
import EmailVerificationInputs from "../components/EmailVerificationInputs";

const EmailVerification: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialState: EmailVerificationState = {
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

  const handleFormSubmit = (event: FormSubmitInterface) => {
    event.preventDefault();
    console.log(formData.otp);
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
