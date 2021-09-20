import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import Button from "../../components/UI/Button";
import AuthFooter from "../../components/Auth/AuthFooter";
import useLoginForm from "../../hooks/login";
import { loginUser } from "../../services/auth";
import formGenerator from "../../utils/formgenerator";

const Login = ({ history }) => {
  const [loginForm, setLoginForm, loginFormValid, setLoginFormValid] =
    useLoginForm();
  const { mutate, isLoading, isError, error } = useMutation(
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
