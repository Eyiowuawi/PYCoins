import { useState } from "react";
import show from "../assets/show.svg";
import { confirmPassword, password } from "../utils/validations";

const useResetPasswordForm = () => {
  const [resetPassword, setResetPassword] = useState({
    password: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      image: show,
      label: "Password",
      validation: password,
      blur: false,
      rwquired: true,
    },
    confirm: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      image: show,
      label: "Confirm Password",
      validation: confirmPassword,
      blur: false,
      rwquired: true,
    },
  });

  return [resetPassword, setResetPassword];
};

export default useResetPasswordForm;
