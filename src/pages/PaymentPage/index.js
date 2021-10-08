import Background from "./../../components/UI/Background";
import User from "../../assets/user.png";
import { useContext, useEffect } from "react";
import usePaymentForm from "../../hooks/paymentpageform";
import Input from "./../../components/UI/Input";
import Button from "./../../components/UI/Button";
import Select from "./../../components/PaymentPage/Select";
import Pay from "./../../components/PaymentPage/Pay";
import PaymentProcess from "../../components/PaymentPage";
import { useState, useMemo } from "react";
import formGenerator from "../../utils/formGenerator";
import WithLoadingComponent from "./../../hoc/withLoading";
import { AppContext } from "./../../context/index";
import { useRouteMatch } from "react-router-dom";
import { useGetPaymentInfo } from "./../../query/getPaymentInfo";
import { useGetCrypto } from "./../../query/getCryptos";
import { cryptos } from "../../constants/index";
import Warning from "../../components/PaymentPage/Warning";
import { processPaymentLink } from "../../services/paymentlink";
import { useMutation } from "react-query";
import WithErrorComponent from "./../../hoc/withError";
import pusher from "./../../utils/pusher";
import { addClassName } from "./../../utils/addClassName";
import Pusher from "pusher-js";
import { toast } from "react-toastify";

const PaymentPage = ({ history }) => {
  const { params } = useRouteMatch();
  const { data, isLoading, error, isError, status } = useGetPaymentInfo(
    params.slug
  );
  const [paymentPageForm, setPaymentPageForm, formValid, setFormValid] =
    usePaymentForm(data?.paymentPage);
  const [show, setShow] = useState(false);

  const form = formGenerator(paymentPageForm, setPaymentPageForm, setFormValid);

  const { data: cryptoData } = useGetCrypto();
  const [processError, setProcessError] = useState();

  useEffect(() => {
    if (error?.message === "404") history.push("/pageNotFound");
    if (error?.message === "Error processing payment page")
      setProcessError(true);
  }, [error]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

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

  const [event, setEvent] = useState("");
  // const [event, setEvent] = useState("Awaiting Payment");

  const {
    data: processLinkData,
    mutate: processLinkMutate,
    isLoading: processLinkLoading,
    isError: processLinkError,
  } = useMutation("processpagelink", (data) => processPaymentLink(data), {
    onSuccess: (message) => {
      console.log("message");
      setEvent("Awaiting Payment");

      // setTimeout(() => {
      //   setEvent("Payment Seen");
      // }, 5000);
      // setTimeout(() => {
      //   setEvent("Payment Completed");
      // }, 10000);

      const channel = pusher.subscribe(
        `payment-notification-${data?.paymentlink.environment}`
      );

      channel.bind(`payment-${message.reference}`, function (details) {
        const { data } = details;
        console.log(data);
        if (data.event === "PAYMENT_SEEN") {
          setEvent("Payment Seen");
          let notification = new Notification("Payercoins", {
            body: "Your payment has been seen",
          });
          toast.info("Your payment has been seen");
        }
        if (data.event === "PAYMENT_COMPLETED") {
          setEvent("Payment Completed");
          let notification = new Notification("Payercoins", {
            body: "Your payment has been successfully completed",
          });
          toast.success("Your payment has been successfully completed");
        }
        if (data.event === "PAYMENT_INCOMPLETE") {
          setEvent("Payment Incomplete ");
          let notification = new Notification("Payercoins", {
            body: "You made an incomplete payment",
          });
          toast.info("You made an incomplete payment");
        }
      });
    },
  });

  // Testing Purposes
  // useEffect(() => {

  // }, [])

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
              <div className="paymentpage_img mb-small">
                <img src={data?.paymentlink.user.profileImage} alt="User" />
              </div>
              <h3 className="title title-black mb-small">
                {data?.paymentlink.pageName}
              </h3>
              <p className="title title-grey ta">
                I am using this link generated with payercoins to accepting
                payment from my customers anywhere around the world.
              </p>
              <form className="paymentpage_form">{form}</form>
              <Button
                disabled={formValid}
                bg="button_primary"
                onclick={() => setShow(true)}
              >
                Pay Now
              </Button>
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
          event={event}
          setEvent={setEvent}
          processPageData={processLinkData}
          event={event}
          isLoading={processLinkLoading}
          isError={processLinkError}
          event={event}
        />
      )}
    </>
  );
};

export default PaymentPage;
