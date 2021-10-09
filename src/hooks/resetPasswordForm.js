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
      required: true,
      info: "Password must be alphanumeric, 8 characters long and must contain a  special character",
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
      required: true,
      info: "Password must be alphanumeric, 8 characters long and must contain a  special character",
    },
  });
  const [resetPasswordValid, setResetPasswordValid] = useState(false);

  return [
    resetPassword,
    setResetPassword,
    resetPasswordValid,
    setResetPasswordValid,
  ];
};

export default useResetPasswordForm;
