import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import Button from "../../components/UI/Button";
import AuthFooter from "../../components/Auth/AuthFooter";
import useLoginForm from "../../hooks/login";
import { loginUser } from "../../services/auth";
import formGenerator from "../../utils/formgenerator";
import GoogleLogin from "react-google-login";
import jwt from "jsonwebtoken";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
const Login = ({ history }) => {
  const [loginForm, setLoginForm, loginFormValid, setLoginFormValid] =
    useLoginForm();
  const { mutate, isLoading, isError } = useMutation(
    (data) => loginUser(data),
    {
      mutationKey: "login",
      onSuccess: () => history.push("/"),
    }
  );

  const form = formGenerator(loginForm, setLoginForm, setLoginFormValid);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let data = {};
    for (let key in loginForm) data[key] = loginForm[key].value;

    mutate(data);
  };

  const responseFacebook = (data) => {
    console.log(data);
  };
  return (
    <div className="auth_form">
      <div className="auth_form-container">
        <h3 className="ta mb-small title title-black">Login to your account</h3>
        <p className="ta mb-small title title-grey">
          Enter your email address and password to continue.
        </p>
        <form onSubmit={handleSubmit}>
          {form}
          <Button
            disabled={loginFormValid}
            isLoading={isLoading}
            bg={"button_primary"}
            type="submit"
          >
            Sign In{" "}
          </Button>
        </form>
        <Link to="/auth/forgotpassword" className="link ta mt-small">
          Forgot Password?
        </Link>
        <FacebookLogin
          appId="1999085153577203"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
        <AuthFooter
          title={"Don't have an account?"}
          link={"/auth/create"}
          linkTitle={"Sign Up"}
        />
      </div>
    </div>
  );
};

export default Login;
