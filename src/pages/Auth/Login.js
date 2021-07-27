import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import AuthFooter from "../../components/Auth/AuthFooter";

import show from "../../assets/show.svg";
const title = "Don't have an account?";
const link = "/create";
const linkTitle = "Sign Up";

const Login = ({ history }) => {
  const [loginForm] = useState({
    email: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
      placeholder: "Email",
    },
    password: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      placeholder: "Password",
      image: show,
    },
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push("/");
  };

  const formArr = [];
  for (let key in loginForm) {
    formArr.push({
      id: key,
      config: loginForm[key],
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
        <h3 className="ta mb-small title title-black">Login to your account</h3>
        <p className="ta mb-small title title-grey">
          Enter your email address and password to continue.
        </p>
        <form>
          {form}
          <Button bg={"button_primary"} onclick={handleSubmit}>Sign In </Button>
        </form>
        <Link
          to="/forgotpassword"
          className="link ta mt-small"
          style={{ width: "100%" }}
        >
          Forgot Password?
        </Link>
        <AuthFooter title={title} link={link} linkTitle={linkTitle} />
      </div>
    </div>
  );
};

export default Login;
