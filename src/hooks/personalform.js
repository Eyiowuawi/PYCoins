import { useState } from "react";
import show from "../assets/show.svg"
const usePersonalForm = () => {
  const [personalForm, setPersonalForm] = useState({
    firstName: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      placeholder: "First Name",

    },
    lastName: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      placeholder: "Last Name",
    },
    number: {
      value: "",
      valid: false,
      type: "text",
      elementType: "input",
      placeholder: "Phone Number",
    },
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
      image:show,
    },
    confirm: {
      value: "",
      valid: false,
      type: "password",
      elementType: "input",
      image: show,
      placeholder: "Confirm Password",
    },
  });

  return [personalForm, setPersonalForm];
};

export default usePersonalForm;
