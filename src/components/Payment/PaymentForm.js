import { useState, useEffect } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import Label from "../UI/Label";
import Button from "../UI/Button";
import Created from "./Created";
import formGenerator from "../../utils/formgenerator";
import useAmount from "./../../hooks/amountform";
const PaymentForm = ({
  closeForm,
  paymentForm,
  paymentFormUpdate,
  validForm,
  validFormUpdate,
}) => {
  const [success, setSuccess] = useState("");
  const [isFixed, setIsFixed] = useState("");

  const [amountForm, setAmountForm] = useAmount();
  const form = formGenerator(paymentForm, paymentFormUpdate);
  const amount = formGenerator(amountForm, setAmountForm);

  useEffect(() => {
    let isValid = true;
    for (let id in paymentForm) {
      isValid = paymentForm[id].valid && isValid;
    }
    if (isFixed === "custom" && isValid) {
      validFormUpdate(true);
    }
    let isAmountValid = true;
    isAmountValid = amountForm.amount.valid && isAmountValid;
    console.log(isValid);
    console.log(isAmountValid);
    console.log(isFixed);
    if (isValid && isAmountValid && isFixed === "fixed") {
      validFormUpdate(true);
    }
  }, [isFixed, paymentForm, amountForm]);

  const handleChange = (evt) => {
    if (evt.target.value === "fixed") {
      setIsFixed("fixed");
    } else setIsFixed("custom");
  };
  return (
    <Modal close={closeForm}>
      {!success && (
        <>
          <h3 className="title title-black">Payment Page</h3>
          <form className="mt-small">
            {form}
            <div className="payment_amount mb-small">
              <Label
                id={"fixed"}
                title="Fixed Amout"
                name={"amount"}
                type="radio"
                onchange={handleChange}
              />
              <Label
                id={"custom"}
                title="Custom Amout Amout"
                name={"amount"}
                type="radio"
                onchange={handleChange}
              />
            </div>
            {isFixed === "fixed" && amount}
            <Button disabled={validForm} bg={"button_primary"}>
              Create Page
            </Button>
          </form>
        </>
      )}
      {success && <Created />}
    </Modal>
  );
};

export default PaymentForm;
