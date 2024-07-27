import React, { useEffect, useState } from "react";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global/event.types";
import Form from "../components/Form";
import Button from "../components/Button";
import { ChangePasswordState } from "../types/pages/state.types";
import ChangePasswordInputs from "../components/ChangePasswordInputs";

const ChangePassword: React.FC = () => {
  const initialState: ChangePasswordState = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    if (formData.password?.trim() && formData.confirmPassword?.trim()) {
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
  };

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      heading="Change Password"
      id="changepassword"
      showSkip={false}>
      <ChangePasswordInputs
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <p className="text-white text-center mb-1 md:-mb-[10px] -mt-1">
        Remember?{" "}
        <span className="text-SECONDARY_BORDER cursor-pointer hover:text-PRIMARY_BUTTON">
          Sign In
        </span>
      </p>
      <Button disabled={formDisabled} title="Update Password" type="submit" />
    </Form>
  );
};

export default ChangePassword;
