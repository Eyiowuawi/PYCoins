import { useState } from "react";

const useBusinessForm = () => {
  const [businessForm, setBusinessForm] = useState({
    name: {
      value: "",
      valid: false,
      elementType: "input",
      type: "text",
      placeholder: "Business Name",
      label: "Business Name",
    },
    country: {
      value: "",
      valid: false,
      elementType: "select",
      options: [
        { id: 1, displayValue: "Country of Incorporation" },
        { id: 2, displayValue: "Nigeria" },
        { id: 3, displayValue: "Togo" },
        { id: 4, displayValue: "Finland" },
        { id: 5, displayValue: "Somalia" },
        { id: 6, displayValue: "Afghanistan" },
      ],
    },
    industry: {
      value: "",
      valid: false,
      elementType: "select",
      options: [
        { id: 1, displayValue: "Industry of Business" },
        { id: 2, displayValue: "Nigeria" },
        { id: 3, displayValue: "Togo" },
        { id: 4, displayValue: "Finland" },
        { id: 5, displayValue: "Somalia" },
        { id: 6, displayValue: "Afghanistan" },
      ],
    },
    email: {
      value: "",
      valid: false,
      type: "email",
      elementType: "input",
      placeholder: "Business Email",
      label: "Business Email",
    },
    role: {
      value: "",
      valid: false,
      elementType: "select",
      options: [
        { id: 1, displayValue: "Role at Business" },
        { id: 2, displayValue: "Nigeria" },
        { id: 3, displayValue: "Togo" },
        { id: 4, displayValue: "Finland" },
        { id: 5, displayValue: "Somalia" },
        { id: 6, displayValue: "Afghanistan" },
      ],
    },

    url: {
      value: "",
      valid: false,
      type: "url",
      elementType: "input",
      placeholder: "Website URL",
      label: "Business URL",
    },
    desc: {
      value: "",
      valid: false,
      type: "url",
      elementType: "textarea",
      placeholder: "Tell us a bit about your business",
    },
    address: {
      value: "",
      valid: false,
      type: "text",
      elementType: "input",
      placeholder: "Business Address",
      label: "Business Address",
    },
  });

  return [businessForm, setBusinessForm];
};

export default useBusinessForm;
