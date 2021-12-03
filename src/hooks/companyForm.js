import { useState } from "react";

import { driverNumberValidator, required } from "../utils/validations";

const useCompanyForm = () => {
  const [companyForm, setCompanyForm] = useState({
    rcNumber: {
      value: "RC",
      type: "text",
      label: "RC Number",
      elementType: "input",
      validation: required,
      required: true,
      valid: false,
      blur: false,
      info: "Must be start with RC",
    },
    companyName: {
      value: "",
      type: "text",
      label: "Company Name",
      elementType: "input",
      validation: required,
      required: true,
      valid: false,
      blur: false,
    },
  });

  return [companyForm, setCompanyForm];
};

export default useCompanyForm;
