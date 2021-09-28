// import Select from "./Select";
import Pay from "./Pay";
import Modal from "./../UI/Modal";
import Success from "./Response";
import { useState } from "react";
import { useGetCrypto } from "../../query/getCryptos";
import Accounts from "./../Account";
import WithLoadingComponent from "./../../hoc/withLoading";
import WithErrorComponent from "./../../hoc/withError";
const PaymentProcess = ({
  close,
  cryptos,
  handlePayment,
  name,
  processPageData,
  setName,
  isLoading,
  isError,
}) => {
  const handleClose = () => {
    close(false);
    setName("");
  };
  return (
    <Modal close={handleClose}>
      <WithLoadingComponent isLoading={isLoading}>
        <Accounts
          cryptos={cryptos}
          header="Select Payment Method"
          title="PAY WITH"
          name={name}
          showForm={handlePayment}
        />
        {name !== "" && (
          <Pay data={processPageData} goBack={() => setName("")} />
        )}
      </WithLoadingComponent>
    </Modal>
  );
};

export default PaymentProcess;
