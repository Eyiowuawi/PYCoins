import { useState } from "react";
import show from "../../assets/show.svg";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import AuthFooter from "../../components/Auth/AuthFooter";

const title = "Remember Your Passoword?";
const link = "/login";
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
    },
    confirm: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      placeholder: "Confirm Password",
      image: show,
    },
  });

  const formArr = [];
  for (let key in resetPassword) {
    formArr.push({
      id: key,
      config: resetPassword[key],
    });
  }

  const form = formArr.map(({ id, config }) => (
    <Input
      key={id}
      value={config.value}
      type={config.type}
      elementType={config.elementType}
      placeholder={config.placeholder}
      info={config.info}
      svg={config.image}
    />
  ));

  return (
    <div className="auth_form">
      <div className="auth_form-container">
        <h3 className="ta mb-small title title-black">Create New Password</h3>
        <p className="ta mb-small title title-grey">
        Enter your new password below and must be 8 characters, special character and an uppercase letter.
        </p>
        <form>
          {form}
          <Button>Reset Password </Button>
        </form>
        <AuthFooter title={title} link={link} linkTitle={linkTitle} />
      </div>
    </div>
  );
};

export default ResetPassword;
