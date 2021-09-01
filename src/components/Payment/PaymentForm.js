import { useState, useEffect, useContext, useMemo, memo } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import Label from "../UI/Label";
import Button from "../UI/Button";
import Created from "./Created";
import formGenerator from "../../utils/formgenerator";
import useAmount from "./../../hooks/amountform";
import { useMutation, useQueryClient } from "react-query";
import { createPaymentLink } from "./../../services/paymentlink";
import { AppContext } from "./../../context/index";
import { addPaymentUrl } from "./../../utils/addPaymentUrl";
import usePaymentForm from "./../../hooks/paymentform";

const PaymentForm = ({ close, closeForm }) => {
  const queryClient = useQueryClient();
  const [success, setSuccess] = useState("");
  const [isFixed, setIsFixed] = useState("");
  const [paymentForm, setPayentForm, paymentFormValid, setPaymentFormValid] =
    usePaymentForm();

  const {
    user: { user },
  } = useContext(AppContext);

  const [amountForm, setAmountForm] = useAmount();
  const form = formGenerator(paymentForm, setPayentForm);
  const amount = formGenerator(amountForm, setAmountForm);
  const [updatedData, setUpdatedData] = useState();
  const { mutate, isLoading, data } = useMutation(
    (data) => createPaymentLink(data),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("getpaymentlinks");
        setSuccess(true);
      },
    }
  );

  useEffect(() => {
    let isValid = true;
    for (let id in paymentForm) {
      isValid = paymentForm[id].valid && isValid;
    }
    if (isFixed === "custom" && isValid) {
      setPaymentFormValid(true);
    }
    if (isFixed === "fixed") setPaymentFormValid(false);
    let isAmountValid = true;
    isAmountValid = amountForm.amount.valid && isAmountValid;

    if (isValid && isAmountValid && isFixed === "fixed") {
      setPaymentFormValid(true);
    }
  }, [isFixed, paymentForm, amountForm]);

  useEffect(() => {
    if (data) {
      const updatedData = addPaymentUrl(data?.paymentlink);
      setUpdatedData(updatedData);
    }
  }, [data]);

  const handleChange = (evt) => {
    if (evt.target.value === "fixed") {
      setIsFixed("fixed");
    } else setIsFixed("custom");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {};
    for (let key in paymentForm) data[key] = paymentForm[key].value;
    data["isAmountFixed"] = isFixed == "fixed" ? "true" : "false";
    data["amount"] = isFixed == "fixed" ? +amountForm.amount.value : 20.0;
    data["user"] = user._id;
    mutate(data);
  };

  return (
    <Modal close={closeForm}>
      {!success && (
        <>
          <h3 className="title title-black">Payment Page</h3>
          <form className="mt-small" onSubmit={handleSubmit}>
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
            <Button
              isLoading={isLoading}
              type="submit"
              disabled={paymentFormValid}
              bg={"button_primary"}
            >
              Create Page
            </Button>
          </form>
        </>
      )}
      {success && <Created data={updatedData} />}
    </Modal>
  );
};

export default PaymentForm;
