import { useState, useEffect } from "react";
import Plus from "../../assets/plus.svg";
import Empty from "../../components/Empty";
import Button from "../../components/UI/Button";
import Link from "../../assets/link.svg";
import PaymentForm from "../../components/Payment/PaymentForm";
import usePaymentForm from "../../hooks/paymentform";
import PaymentTable from "../../components/Payment/Table";
import { paymentTable } from "../../constants";
import PaymentTableResponsive from "./../../components/Payment/PaymentTable";
import useWindowWidth from "./../../hooks/windowwidth";

const Payment = ({ history }) => {
  const [show, setShow] = useState(false);
  const [paymentForm] = usePaymentForm();
  const [width, setWidth] = useWindowWidth();

  const handleChangePage = (id) => {
    history.push(`/payment/pay/${id}`);
  };

  return (
    <>
      <div className="payment">
        <div className="payment_container">
          <h3 className="title title-black">Payment Page</h3>
          <Button bg={"button_primary"} onclick={() => setShow(true)}>
            <img src={Plus} alt="Add" />
            <span>Create New</span>
          </Button>
        </div>
        {/* <Empty>
          <img src={Link} alt="Empty State" />
          <h3 className="title title-black mb-small mt-small">
            You haven’t created any payment link yet!
          </h3>
          <p className="title title-grey ">
            Create a payment link to start requesting money from friends,
            family, customers or anyone anywhere around the world.
          </p>
        </Empty> */}
        {width > 400 && (
          <PaymentTable gotoDetails={handleChangePage} data={paymentTable} />
        )}
        {width <= 400 && (
          <PaymentTableResponsive
            gotoDetails={handleChangePage}
            data={paymentTable}
          />
        )}
      </div>
      {show && <PaymentForm closeForm={setShow} paymentForm={paymentForm} />}
    </>
  );
};

export default Payment;
