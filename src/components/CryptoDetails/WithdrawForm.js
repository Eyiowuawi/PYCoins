import { LeftArrow } from "../../icons";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import { extractNumber } from "../../utils/numberWithComma";
// import Input from "../UI/Input";
import formGenerator from "./../../utils/formGenerator";
import axios from "axios";

const WithdrawForm = ({
  withdraw,
  goBack,
  withdrawForm,
  setForm,
  validForm,
  setValidForm,
  crypto,
  isLoading,
  isBank,
  balance,
}) => {
  const form = formGenerator(withdrawForm, setForm, setValidForm);
  const [isInitiateLoading, setIsInitiateLoading] = useState(true);
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState();
  const [isInsufficient, setIsInsufficient] = useState(false);

  useEffect(() => {
    const fetchRate = async () => {
      const token = localStorage.getItem("token");
      setIsInitiateLoading(true);
      const { data } = await axios.get(
        `https://api.payercoins.com/api/v1/live/payment/crypto/rate?cryptos=${crypto.rate}&currencies=USD,NGN`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRates(data.rates[crypto.rate]);
      setIsInitiateLoading(false);
    };
    crypto && fetchRate();
  }, [crypto]);

  // const handleSubmit = (evt) => {
  //   withdraw(evt, rates);
  // };

  useEffect(() => {
    if (rates.NGN && withdrawForm.amount.value && isBank) {
      const amount = extractNumber(withdrawForm.amount.value) / rates.NGN;
      setAmount(amount);
    } else setAmount(balance);
  }, [rates, withdrawForm.amount.value]);

  useEffect(() => {
    console.log(withdrawForm.amount.value);
    if (isBank) {
      if (balance < amount && withdrawForm.amount.value !== "NaN") {
        setValidForm(false);
        setIsInsufficient(true);
      } else {
        setIsInsufficient(false);
        setValidForm(true);
      }
    } else {
      if (balance < withdrawForm.amount.value) {
        setValidForm(false);
        setIsInsufficient(true);
      } else {
        setIsInsufficient(false);
        // setValidForm(true);
      }
    }
  }, [withdrawForm.amount.value, amount, balance]);

  const handleSubmit = (evt) => {
    withdraw(evt, amount, rates);
  };
  return (
    <div className="popupform">
      <div className="popupform_back" onClick={goBack}>
        <LeftArrow fill={"#333333"} />
      </div>
      <h3 className="title title-black ta ">Withdraw</h3>
      <p className="title title-grey mt-small">
        Enter the amount of{" "}
        <strong style={{ color: "#333333", fontWeight: "bolder" }}>
          {/* {crypto?.rate || "naira"}{" "} */}
          {isBank ? "Naira" : crypto.rate}{" "}
        </strong>
        you’d like to withdraw
      </p>
      {isInsufficient && (
        <p style={{ color: "#EB5757" }} className="mt-small">
          Insufficient Funds
        </p>
      )}
      <form className="mt-small" onSubmit={handleSubmit}>
        {form}
      </form>
      <div
        className="mb-small mt-smaller"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {isBank &&
          withdrawForm.amount.value.length > 0 &&
          withdrawForm.amount.value !== "NaN" && (
            <p className="title title-grey">
              {parseFloat(amount).toFixed(9)} {crypto.rate}
            </p>
          )}
        {!isInitiateLoading && (
          <p className="title title-grey">
            1 {crypto.rate} = {parseFloat(rates.USD).toFixed(2)} USD{" "}
            {isBank && (
              <span>
                {" "}
                (NGN
                {parseFloat(rates.NGN).toFixed(2)})
              </span>
            )}
          </p>
        )}
      </div>
      <Button
        disabled={validForm}
        isLoading={isLoading}
        onclick={handleSubmit}
        bg="button_primary"
        type="submit"
      >
        Continue
      </Button>
    </div>
  );
};

export default WithdrawForm;
