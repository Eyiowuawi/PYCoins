import { useState } from "react";
import { required } from "../utils/validations";

const useWithdrawForm = () => {
  const [withdrawForm, setWithdrawForm] = useState({
    walletAddress: {
      value: "",
      type: "text",
      label: "Wallet Address",
      elementType: "input",
      validation: required,
      required: true,
      blur: false,
      valid: false,
    },
    amount: {
      value: "",
      type: "number",
      label: "Amount",
      elementType: "input",
      validation: required,
      required: true,
      blur: false,
      valid: false,
    },
  });

  const [formValid, setFormValid] = useState(false);
  return [withdrawForm, setWithdrawForm, formValid, setFormValid];
};

export default useWithdrawForm;
