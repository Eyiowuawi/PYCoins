import { useState } from "react";
import show from "../../assets/show.svg";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import AuthFooter from "../../components/Auth/AuthFooter";
import formGenerator from "../../utils/formgenerator";

const title = "Remember Your Passoword?";
const link = "/auth/login";
const linkTitle = "Login";

const ResetPassword = () => {
  const [resetPassword] = useState({
    password: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      image: show,
      placeholder: "Password",
      label: "Password",
    },
    confirm: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      placeholder: "Confirm Password",
      image: show,
      label: "Confirm Password"
    },
  });

  const form = formGenerator(resetPassword)

  return (
    <div className="auth_form">
      <div className="auth_form-container">
        <h3 className="ta mb-small title title-black">Create New Password</h3>
        <p className="ta mb-small title title-grey">
        Enter your new password below and must be 8 characters, special character and an uppercase letter.
        </p>
        <form>
          {form}
          <Button bg={"button_primary"}>Reset Password </Button>
        </form>
        <AuthFooter title={title} link={link} linkTitle={linkTitle} />
      </div>
    </div>
  );
};

export default ResetPassword;
