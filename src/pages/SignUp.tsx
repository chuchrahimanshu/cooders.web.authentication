import React from "react";
import Label from "../components/Label";

const SignUp: React.FC = () => {
  return (
    <form className="bg-SECONDARY_BACKGROUND p-5 rounded-2xl" id="signup">
      <Label id="signup-firstname" title="First Name" form="signup" />
    </form>
  );
};

export default SignUp;
