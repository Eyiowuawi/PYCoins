import { useState } from "react";
import show from "../../assets/show.svg";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import AuthFooter from "../../components/Auth/AuthFooter";
import formGenerator from "../../utils/formgenerator";
import useResetPasswordForm from "./../../hooks/resetpasswordform";

const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useResetPasswordForm();
  const form = formGenerator(resetPassword);

  return (
    <div className="auth_form">
      <div className="auth_form-container">
        <h3 className="ta mb-small title title-black">Create New Password</h3>
        <p className="ta mb-small title title-grey">
          Enter your new password below and must be 8 characters, special
          character and an uppercase letter.
        </p>
        <form>
          {form}
          <Button bg={"button_primary"}>Reset Password </Button>
        </form>
        <AuthFooter
          title={"Remember Your Passoword?"}
          link={"/auth/login"}
          linkTitle={"Login"}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
