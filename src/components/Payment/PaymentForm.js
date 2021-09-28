import { useState, useEffect, useContext, useMemo } from "react";
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
import { useGetUserWallets } from "./../../query/getCryptos";

const PaymentForm = ({
  paymentForm,
  setPaymentForm,
  paymentFormValid,
  setPaymentFormValid,
  amountForm,
  setAmountForm,
  show,
  handleClose,
  isEditMode,
  amountType,
  handleSubmit,
  data,
  isLoading,
}) => {
  const [isFixed, setIsFixed] = useState("");

  const form = formGenerator(paymentForm, setPaymentForm);

  const amount = formGenerator(amountForm, setAmountForm);

  const [updatedData, setUpdatedData] = useState();

  useEffect(() => {
    if (amountType === "fixed") setIsFixed("fixed");
    else setIsFixed("custom");
  }, [amountType]);

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

  const handleSubmitHandler = (evt) => {
    handleSubmit(evt, isFixed);
  };

  return (
    <Modal show={show} close={handleClose}>
      {!data && (
        <>
          <h3 className="title title-black">Payment Page</h3>
          <form className="mt-small" onSubmit={handleSubmitHandler}>
            {form}
            <div className="payment_amount mb-small">
              <Label
                id={"fixed"}
                title="Fixed Amout"
                name={"amount"}
                type="radio"
                onchange={handleChange}
                // checked={amountType === "fixed" && true}
              />
              <Label
                id={"custom"}
                title="Custom Amout Amout"
                name={"amount"}
                type="radio"
                onchange={handleChange}
                // checked={amountType === "custom" && true}
              />
            </div>
            {isFixed === "fixed" && amount}
            <Button
              isLoading={isLoading}
              type="submit"
              disabled={paymentFormValid}
              bg={"button_primary"}
            >
              {isEditMode ? `Update Page` : "Create Page"}
            </Button>
          </form>
        </>
      )}
      {data && <Created data={updatedData} />}
    </Modal>
  );
};

export default PaymentForm;
