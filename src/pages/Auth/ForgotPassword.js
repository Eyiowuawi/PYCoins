import { useState } from "react";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import AuthFooter from "../../components/Auth/AuthFooter";

const title = "Remember Your Passoword?";
const link = "/auth/login";
const linkTitle="Login"
const ForgotPassword = () => {
  const [email] = useState("");

  return (
    <div className="auth_form">
      <div className="auth_form-container">
        <h3 className="ta mb-small title title-black">Forgot Password</h3>
        <p className="ta mb-small title title-grey">
          Enter your email address and we'll send you an email with instructions
          to reset your password.
        </p>
        <form>
          <Input
            type="text"
            elementType="input"
            value={email}
            placeholder="Email Address"
          />
          <Button bg={"button_primary"}>Reset Password </Button>
        </form>
        <AuthFooter title={title} link={link} linkTitle={linkTitle} />
      </div>
    </div>
  );
};

export default ForgotPassword;
