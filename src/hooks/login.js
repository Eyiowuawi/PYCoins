import { useState } from "react";
import { emailCheck, password } from "../utils/validations";
import show from "../assets/show.svg";

const useLoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    email: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
      placeholder: "Email",
      label: "Email",
      validation: emailCheck,
      required: true,
      blur: false,
    },
    password: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      placeholder: "Password",
      image: show,
      label: "Password",
      validation: password,
      blur: false,
      rwquired: true,
    },
  });
  const [loginFormValid, setLoginFormValid] = useState(false);

  return [loginForm, setLoginForm, loginFormValid, setLoginFormValid];
};

export default useLoginForm;
