import Background from "./../../components/UI/Background";
import User from "../../assets/user.png";

import usePaymentForm from "../../hooks/paymentpageform";
import Input from "./../../components/UI/Input";
import Button from "./../../components/UI/Button";
import Select from "./../../components/PaymentPage/Select";
import Pay from "./../../components/PaymentPage/Pay";
import PaymentProcess from "../../components/PaymentPage";
import { useState } from "react";
import formGenerator from "../../utils/formgenerator";

const PaymentPage = () => {
  const [paymentPageForm, setPaymentPageForm] = usePaymentForm();
  const [show, setShow] = useState(false);  

  const form = formGenerator(paymentPageForm)

  return (
    <>
      <Background>
        <div className="paymentpage">
          <div className="paymentpage_img mb-small">
            <img src={User} alt="User" />
          </div>
          <h3 className="title title-black mb-small">Payment Page Name</h3>
          <p className="title title-grey ta">
            Hi, I’m John Doe. I am using this link generated with payercoins to
            accepting payment from my customers anywhere around the world.
          </p>
          <form className="paymentpage_form">{form}</form>
          <Button disabled={true} bg="button_primary" onclick={() => setShow(true)}>
            Pay Now
          </Button>
        </div>
      </Background>
      {show && <PaymentProcess close={setShow} />}
    </>
  );
};

export default PaymentPage;
