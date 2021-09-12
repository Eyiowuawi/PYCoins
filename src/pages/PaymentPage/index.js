import Background from "./../../components/UI/Background";
import User from "../../assets/user.png";
import { useContext, useEffect } from "react";
import usePaymentForm from "../../hooks/paymentpageform";
import Input from "./../../components/UI/Input";
import Button from "./../../components/UI/Button";
import Select from "./../../components/PaymentPage/Select";
import Pay from "./../../components/PaymentPage/Pay";
import PaymentProcess from "../../components/PaymentPage";
import { useState } from "react";
import formGenerator from "../../utils/formgenerator";
import WithLoadingComponent from "./../../hoc/withLoading";
import { AppContext } from "./../../context/index";
import { useRouteMatch } from "react-router-dom";
import { useGetPaymentInfo } from "./../../query/getPaymentInfo";

const PaymentPage = ({ history }) => {
  const [paymentPageForm, setPaymentPageForm, formValid, setFormValid] =
    usePaymentForm();
  const [show, setShow] = useState(false);
  const { fullname } = useContext(AppContext);

  const form = formGenerator(paymentPageForm, setPaymentPageForm, setFormValid);

  const { params } = useRouteMatch();

  const { data, isLoading, error, isError, status } = useGetPaymentInfo(
    params.slug
  );
  useEffect(() => {
    if (error?.message === "404") history.push("/pageNotFound");
  }, [error]);
  return (
    <>
      <Background>
        <WithLoadingComponent isLoading={isLoading}>
          <div className="paymentpage">
            <div className="paymentpage_img mb-small">
              <img src={data?.paymentlink.user.profileImage} alt="User" />
            </div>
            <h3 className="title title-black mb-small">
              {data?.paymentlink.pageName}
              {/* Dabiri Mayowa */}
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
        </WithLoadingComponent>
      </Background>
      {show && <PaymentProcess close={setShow} />}
    </>
  );
};

export default PaymentPage;
