import { useState } from "react";
import { required } from "./../utils/validations";

const useAmount = () => {
  const [amountForm, setAmountForm] = useState({
    amount: {
      value: "",
      type: "number",
      label: "Enter your amount",
      elementType: "input",
      validation: required,
      required: true,
      blur: false,
    },
  });
  return [amountForm, setAmountForm];
};

export default useAmount;
