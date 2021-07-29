import { Copy, Delete, Edit, LeftArrow } from "../../icons";
import { Link } from "react-router-dom";
import Back from "../../components/Back";
import Balance from "./../../components/PaymentDetails/Balance";
import Table from "../../components/Table";
import { transactions } from "../../constants";
import { useState } from "react";
import TransactionsDetails from "../../components/TransactionDetails";

const PaymentDetails = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="paymentdetails">
      <Back to="/payment/pay" title="Back" />
      <div className="paymentdetails_header">
        <h3 className="title title-black">Payment Page Name</h3>
        <div className="paymentdetails_ctas">
          <div>
            <Copy fill="#787676" />
            <p className="title title-grey">Copy Link</p>
          </div>
          <div>
            <Edit fill="#787676" />
            <p className="title title-grey">Edit</p>
          </div>
          <div>
            <Delete />
            <p className="delete">Delete</p>
          </div>
        </div>
      </div>
      <h5 className="title title-black  ">Balance</h5>
      <Balance />
      <h3 className="title title-black mt-small">Transactions</h3>
      <Table data={transactions} onclick={() => setShow(true)} />
      {show && <TransactionsDetails close={setShow} />}
    </div>
  );
};

export default PaymentDetails;
