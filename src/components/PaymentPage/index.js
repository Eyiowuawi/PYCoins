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
  // name,
  processPageData,
  setEvent,
  isLoading,
  isError,
  event,
}) => {
  const handleClose = () => {
    close(false);
    setEvent("");
  };
  return (
    <Modal close={handleClose}>
      <WithLoadingComponent isLoading={isLoading}>
        <Accounts
          cryptos={cryptos}
          header="Select Payment Method"
          title="PAY WITH"
          name={event}
          showForm={handlePayment}
        />
        {(event === "Awaiting Payment" || event === "Payment Seen") && (
          <Pay
            event={event}
            data={processPageData}
            goBack={() => setEvent("")}
          />
        )}
      </WithLoadingComponent>
      {(event === "Payment Completed" || event === "Payment Incomplete ") && (
        <Success event={event} />
      )}
    </Modal>
  );
};

export default PaymentProcess;
