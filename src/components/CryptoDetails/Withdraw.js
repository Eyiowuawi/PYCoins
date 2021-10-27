import { useState, useContext, useMemo } from "react";

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
// import { requestWithdrawal } from "../../services/crypto";
import { initiateWithdrawal, processWithdrawal } from "../../services/withdraw";
import useOtp from "./../../hooks/otpForm";
import { toast } from "react-toastify";
import { AppContext } from "./../../context/index";

const WithDraw = ({ currency, close, show, selectedCrypto }) => {
  const { settlements } = useContext(AppContext);

  const crypto = useMemo(() => {
    return cryptos.filter((item) => item.slug === currency);
  }, []);

  const selectedSettlement = useMemo(() => {
    return settlements.find((item) => item.wallet_slug === currency);
  }, [settlements, currency]);

  const [withdrawForm, setWithdrawForm, formValid, setFormValid] =
    useWithdrawForm(selectedSettlement);

  const [otpForm, setOtpForm, isValidForm, setIsValidForm] = useOtp();

  const [name, setName] = useState("");

  const { mutate: initiateWithdrawalMutate, isLoading: isInitiateLoading } =
    useMutation((data) => initiateWithdrawal(data), {
      onSuccess: () => {
        toast.success("An Otp has been sent to your email address");
        setName("otp");
      },
    });

  const { mutate: processWithdrawalMutate, isLoading: isProcessLoading } =
    useMutation((data) => processWithdrawal(data), {
      onSuccess: () => setName("success"),
    });

  const handleChange = (name) => {
    setName(name);
  };

  const handleInitiateWithdrawal = (evt) => {
    evt.preventDefault();
    const data = {
      type: "crypto",
      wallet: selectedSettlement.wallet_slug,
      walletName: selectedSettlement.key,
    };
    for (const key in withdrawForm) data[key] = withdrawForm[key].value;

    initiateWithdrawalMutate(data);
  };

  const handleProcessWithdrawal = (evt) => {
    evt.preventDefault();
    const data = {
      otp: otpForm.otp.value,
    };
    processWithdrawalMutate(data);
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
            cryptos={selectedSettlement ? crypto : null}
            name={name}
            showForm={handleChange}
            isBankAdded={true}
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
            // withdraw={handleSendOtp}
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
            withdraw={handleInitiateWithdrawal}
            withdrawForm={withdrawForm}
            setForm={setWithdrawForm}
            validForm={formValid}
            setValidForm={setFormValid}
            crypto={selectedCrypto}
            isLoading={isInitiateLoading}
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
            verifyOtp={handleProcessWithdrawal}
            otpForm={otpForm}
            setForm={setOtpForm}
            validForm={isValidForm}
            setValidForm={setIsValidForm}
            isLoading={isProcessLoading}
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
            text=" Your withdrawal was successful."
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
