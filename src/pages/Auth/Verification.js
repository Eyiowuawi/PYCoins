import { useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { useVerifyEmail } from "../../query/getVerifiedEmail";
import { useMutation } from "react-query";
import { resendEmailVerify } from "../../services/auth";
import useForgotPasswordForm from "./../../hooks/forgotpasswordform";
import formGenerator from "./../../utils/formgenerator";
import Button from "./../../components/UI/Button";
import AuthFooter from './../../components/Auth/AuthFooter';

const Verification = () => {
  const { search } = useLocation();
  const token = search.substring(20);
  const [
    forgotpasswordForm,
    setForgotPasswordForm,
    forgotFormValid,
    setForgotFormValid,
  ] = useForgotPasswordForm();
  const form = formGenerator(
    forgotpasswordForm,
    setForgotPasswordForm,
    setForgotFormValid
  );
  const { data, isSuccess, isError } = useVerifyEmail(token);
  const { mutate, isLoading } = useMutation((data) => resendEmailVerify(data));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      email: forgotpasswordForm.email.value,
    };
    mutate(data);
  };

  if (isError) {
    return (
      <div className="auth_form">
        <div className="auth_form-container ta">
          <h3 className=" mb-small title title-black">Resend Email</h3>
          <form onSubmit={handleSubmit}>
            {form}
            <Button
              type="submit"
              isLoading={isLoading}
              disabled={forgotFormValid}
              bg={"button_primary"}
            >
              Resend Email{" "}
            </Button>
          </form>
          <AuthFooter
            title={"Don't have an account?"}
            link={"/auth/create"}
            linkTitle={"Create account"}
          />
        </div>
      </div>
    );
  }

  return <div className="ta">verifying...</div>;
};

export default Verification;
