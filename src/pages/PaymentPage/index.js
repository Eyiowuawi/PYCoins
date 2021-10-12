import { useState, useMemo, useEffect } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useRouteMatch } from "react-router-dom";
import { Helmet } from "react-helmet";

import WithErrorComponent from "./../../hoc/withError";
import WithLoadingComponent from "./../../hoc/withLoading";

import Background from "./../../components/UI/Background";
import PaymentProcess from "../../components/PaymentPage";
import Button from "./../../components/UI/Button";
import Warning from "../../components/PaymentPage/Warning";

import { useGetPaymentInfo } from "./../../query/getPaymentInfo";

import formGenerator from "../../utils/formGenerator";
import pusher from "./../../utils/pusher";
import { addClassName } from "./../../utils/addClassName";

import usePaymentForm from "../../hooks/paymentPageForm";

import { useGetCrypto } from "./../../query/getCryptos";

import { processPaymentLink } from "../../services/userPaymentLink";

import Logo from "../../assets/Logo.svg";

const PaymentPage = ({ history }) => {
  const [processError, setProcessError] = useState();
  const [event, setEvent] = useState("");

  const { params } = useRouteMatch();

  const { data, isLoading, error } = useGetPaymentInfo(params.slug);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (error?.message === "404") history.push("/pageNotFound");
    if (error?.message === "Payment Link Has been disabled!")
      history.push("/pageNotFound");
    if (error?.message === "Error processing payment page")
      setProcessError(true);
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps

  const [paymentPageForm, setPaymentPageForm, formValid, setFormValid] =
    usePaymentForm(data?.paymentPage);

  const { data: cryptoData } = useGetCrypto();

  const form = formGenerator(paymentPageForm, setPaymentPageForm, setFormValid);

  const userCryptos = useMemo(() => {
    const environment = data?.paymentlink.environment;
    const availableCrypto = data?.paymentPage.availableCrypto;

    const filteredCrypto =
      cryptoData &&
      cryptoData[environment]?.filter((item) => {
        return availableCrypto?.includes(item.slug);
      });

    if (filteredCrypto?.length > 0) {
      const addedCrypto = addClassName(filteredCrypto);
      return addedCrypto;
    }
  }, [data, cryptoData]);

  const {
    data: processLinkData,
    mutate: processLinkMutate,
    isLoading: processLinkLoading,
    isError: processLinkError,
  } = useMutation("processpagelink", (data) => processPaymentLink(data), {
    onSuccess: (message) => {
      setEvent("Awaiting Payment");

      const channel = pusher.subscribe(
        `payment-notification-${data?.paymentlink.environment}`
      );

      channel.bind(`payment-${message.reference}`, function (details) {
        const { data } = details;
        if (data.event === "PAYMENT_SEEN") {
          setEvent("Payment Seen");
          new Notification("Payercoins", {
            body: "Your payment has been seen",
          });
          toast.info("Your payment has been seen");
        }
        if (data.event === "PAYMENT_COMPLETED") {
          setEvent("Payment Completed");
          new Notification("Payercoins", {
            body: "Your payment has been successfully completed",
          });
          toast.success("Your payment has been successfully completed");
        }
        if (data.event === "PAYMENT_INCOMPLETE") {
          setEvent("Payment Incomplete ");
          new Notification("Payercoins", {
            body: "You made an incomplete payment",
          });
          toast.info("You made an incomplete payment");
        }
      });
    },
  });

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const handleProcessPaymentLink = async (slug) => {
    const paymentData = {};
    for (let key in paymentPageForm) {
      if (key === "amount") paymentData[key] = +paymentPageForm[key].value;
      else paymentData[key] = paymentPageForm[key].value;
    }
    const { uuid } = await userCryptos.find((item) => item.slug === slug);
    paymentData["crypto"] = uuid;
    const ref = data.paymentPage.reference;
    const environ = data.paymentlink.environment;
    processLinkMutate({ paymentData, ref, environ });
  };

  return (
    <>
      <Background>
        <WithLoadingComponent isLoading={isLoading}>
          <WithErrorComponent isError={processError}>
            <div className="paymentpage">
              <Helmet>
                <title> Make a payment - Payercoins</title>
              </Helmet>
              <div className="paymentpage_img mb-small">
                <img src={data?.paymentlink.user.profileImage} alt="User" />
              </div>
              <h3 className="title title-black mb-small">
                {data?.paymentlink.pageName}
              </h3>
              <p className="title title-grey ta">
                {data?.paymentPage.metaData.description}
              </p>
              {!error && <form className="paymentpage_form">{form}</form>}
              <Button
                disabled={formValid}
                bg="button_primary"
                onclick={() => setShow(true)}
              >
                Pay Now
              </Button>
              <div className="paymentpage_powered">
                <span className="title title-grey"> Powered by</span>
                <a
                  href={"https://payercoins.com"}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img src={Logo} alt="payercoins" />
                </a>
              </div>
            </div>
          </WithErrorComponent>
        </WithLoadingComponent>
      </Background>
      {data?.paymentlink.environment === "sandbox" && <Warning />}
      {show && (
        <PaymentProcess
          cryptos={userCryptos}
          close={setShow}
          handlePayment={handleProcessPaymentLink}
          setEvent={setEvent}
          processPageData={processLinkData}
          isLoading={processLinkLoading}
          isError={processLinkError}
          event={event}
        />
      )}
    </>
  );
};

export default PaymentPage;
