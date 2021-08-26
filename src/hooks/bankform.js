import { useState } from "react";

const useBankForm = () => {
  const [bankForm, setBankForm] = useState({
    country: {
      value: "",
      valid: false,
      elementType: "select",
      options: [
        { id: 1, displayValue: "Sect Country" },
        { id: 2, displayValue: "Nigeria" },
        { id: 3, displayValue: "Togo" },
        { id: 4, displayValue: "Fnland" },
        { id: 5, displayValue: "Somalia" },
        { id: 6, displayValue: "Afghanistan" },
      ],
    },
    currency: {
      value: "",
      valid: false,
      elementType: "select",
      options: [
        { id: 1, displayValue: "Select Currency" },
        { id: 4, displayValue: "NGN" },
        { id: 5, displayValue: "Dollars" },
        { id: 6, displayValue: "Euros" },
      ],
    },
    bank: {
      value: "",
      valid: false,
      elementType: "select",
      options: [
        { id: 1, displayValue: "Select Bank" },
        { id: 4, displayValue: "NGN" },
        { id: 5, displayValue: "Dollars" },
        { id: 6, displayValue: "Euros" },
      ],
    },
    number: {
      value: "",
      valid: false,
      elementType: "input",
      type: "number",
      placeholder: "Accouunt Number",
      label: "Account Number"
    },
    name: {
      value: "",
      valid: false,
      elementType: "input",
      type: "number",
      placeholder: "Accouunt Name",
      label: "Account Name"
    },
  });
  return [bankForm, setBankForm];
};

export default useBankForm;
