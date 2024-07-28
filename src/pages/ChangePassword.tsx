import React, { useEffect, useState } from "react";
import {
  FormChangeInterface,
  FormSubmitInterface,
} from "../types/global.types";
import Form from "../components/form/Form";
import Button from "../components/form/Button";
import ChangePasswordInputs from "../components/input/ChangePasswordInputs";
import { useNavigate } from "react-router-dom";
import { ChangePasswordState } from "../types/pages.types";

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();

  const initialState: ChangePasswordState = {
    username: "",
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

  const handleSignInNavigation = () => {
    navigate("/sessions");
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
      <p className="text-base-text text-center mb-1 md:-mb-[10px] -mt-1 text-sm">
        Remember?{" "}
        <span
          className="text-highlight-border cursor-pointer hover:text-action-button text-sm"
          onClick={handleSignInNavigation}>
          Sign In
        </span>
      </p>
      <Button disabled={formDisabled} title="Update Password" type="submit" />
    </Form>
  );
};

export default ChangePassword;
