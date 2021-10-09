import { useState, useEffect, useContext, useMemo, memo } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import Label from "../UI/Label";
import Button from "../UI/Button";
import Created from "./Created";
import formGenerator from "../../utils/formGenerator";
import useAmount from "./../../hooks/amountform";
import { useMutation, useQueryClient } from "react-query";
import { createPaymentLink } from "./../../services/paymentlink";
import { AppContext } from "./../../context/index";
import { addPaymentUrl } from "./../../utils/addPaymentUrl";
import usePaymentForm from "./../../hooks/paymentform";
import { useGetUserWallets } from "./../../query/getCryptos";

const PaymentForm = ({
  show,
  isEditMode,
  amountType,
  handleSubmit,
  setShow,
}) => {
  const { data: userData } = useGetUserWallets();

  const userAcceptedWallet = useMemo(() => {
    return userData;
  }, [userData]);

  const [paymentForm, setPaymentForm, paymentFormValid, setPaymentFormValid] =
    usePaymentForm(userAcceptedWallet);
  const [amountForm, setAmountForm] = useAmount();

  const [isFixed, setIsFixed] = useState("");

  const form = formGenerator(paymentForm, setPaymentForm);

  const amount = formGenerator(amountForm, setAmountForm);

  const [updatedData, setUpdatedData] = useState();

  const [name, setName] = useState("");

  const { mutate, isLoading, data, isSuccess } = useMutation(
    (data) => createPaymentLink(data),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("getpaymentlinks");
        setName("success");
      },
    }
  );

  useEffect(() => {
    if (amountType === "fixed") setIsFixed("fixed");
    else if (amountType === "custom") setIsFixed("custom");
    else setIsFixed("");
  }, [amountType]);

  useEffect(() => {
    let isValid = true;

    for (let id in paymentForm) {
      isValid = paymentForm[id].valid && isValid;
    }
    if (isFixed === "custom" && isValid) {
      setPaymentFormValid(true);
    } else {
      setPaymentFormValid(false);
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

  const queryClient = useQueryClient();

  const handleChange = (evt) => {
    if (evt.target.value === "fixed") {
      setIsFixed("fixed");
    } else setIsFixed("custom");
  };

  const handleSubmitHandler = (evt) => {
    evt.preventDefault();
    const data = {};
    for (let key in paymentForm) data[key] = paymentForm[key].value;
    data["isAmountFixed"] = isFixed == "fixed" ? true : false;
    data["amount"] = isFixed == "fixed" ? +amountForm.amount.value : 0;
    // handleSubmit(evt, isFixed);
    // console.log(data);
    mutate(data);
  };

  const handleClose = () => {
    setShow(!show);
  };

  const handleCreateLink = (evt, isFixed) => {
    // evt.preventDefault();

    mutate(data);
  };

  return (
    <Modal show={show} close={handleClose}>
      {name == "" && (
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
      {name === "success" && <Created data={updatedData} />}
    </Modal>
  );
};

export default memo(PaymentForm, (prevProps, nextProps) => {
  return prevProps.show !== nextProps.show;
});
