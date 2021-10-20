import { useState } from "react";

import Accounts from "../Account";
import Confirmation from "./Confirmation";
import OtpForm from "./Otp";

import WithdrawForm from "./WithdrawForm";
import Modal from "../UI/Modal";
import Response from "../UI/Response";

import Success from "../../assets/success.svg";

import { cryptos } from "../../constants";
import useWithdrawForm from "./../../hooks/withdrawalForm";
import { useMutation } from "react-query";
import { requestWithdrawal } from "../../services/crypto";
import { sendOtp, verifyOtp } from "../../services/otp";
import useOtp from "./../../hooks/otpForm";
import { toast } from "react-toastify";

const WithDraw = ({ currency, close, show, selectedCrypto }) => {
  const crypto = cryptos.filter((item) => item.slug === currency);

  const [withdrawForm, setWithdrawForm, formValid, setFormValid] =
    useWithdrawForm();

  const [otpForm, setOtpForm, isValidForm, setIsValidForm] = useOtp();

  const [name, setName] = useState("");

  const { mutate: sendOtpMutate, isLoading: isWithdrawLoading } = useMutation(
    (data) => sendOtp(data),
    {
      onSuccess: () => {
        toast.success("An Otp has been sent to your email address");
        setName("otp");
      },
    }
  );
  const { mutate: verifyOtpMutate, isLoading: isVerifyLoading } = useMutation(
    (data) => verifyOtp(data),
    {
      onSuccess: () => setName("success"),
    }
  );

  const handleChange = (name) => {
    setName(name);
  };

  const handleSendOtp = (evt) => {
    evt.preventDefault();
    const data = {};
    for (const key in withdrawForm) data[key] = withdrawForm[key].value;
    data["currency"] = selectedCrypto.rate;
    data["action"] = "withdrawal";
    sendOtpMutate(data);
    // setName("success");
  };

  const handleVerifyOtp = (evt) => {
    evt.preventDefault();
    const data = {
      otp: otpForm.otp.value,
    };
    verifyOtpMutate(data)
  };

  const handleSuccess = (evt) => {
    evt.preventDefault();
    setName("success");
  };

  let renderElement;
  switch (name) {
    case "":
      renderElement = (
        <>
          <Accounts
            header="Settlement Account"
            title="SELECT YOUR SETTLEMENT METHOD "
            cryptos={crypto}
            name={name}
            showForm={handleChange}
          />
        </>
      );
      break;
    case "bank":
      renderElement = (
        <>
          <WithdrawForm
            goBack={() => setName("")}
            name=""
            withdraw={handleSendOtp}
          />
        </>
      );
      break;
    case currency:
      renderElement = (
        <>
          <WithdrawForm
            goBack={() => setName("")}
            name=""
            withdraw={handleSendOtp}
            withdrawForm={withdrawForm}
            setForm={setWithdrawForm}
            validForm={formValid}
            setValidForm={setFormValid}
            crypto={selectedCrypto}
            isLoading={isWithdrawLoading}
          />
        </>
      );
      break;
    case "otp":
      renderElement = (
        <>
          <OtpForm
            goBack={() => setName("")}
            name=""
            verifyOtp={handleVerifyOtp}
            otpForm={otpForm}
            setForm={setOtpForm}
            validForm={isValidForm}
            setValidForm={setIsValidForm}
            isLoading={isVerifyLoading}
          />
        </>
      );
      break;
    case "withdraw":
      renderElement = (
        <>
          <Confirmation
            goBack={() => setName("bank")}
            success={handleSuccess}
          />
        </>
      );
      break;
    case "success":
      renderElement = (
        <>
          <Response
            img={Success}
            title="Withdrawal Successful"
            text=" Your withdrawal of NGN 100,000 was successful."
          />
        </>
      );
      break;
    default:
      return null;
  }

  return (
    <Modal show={show} close={close}>
      {renderElement}
    </Modal>
  );
};

export default WithDraw;
