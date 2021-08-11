import { Copy, Delete, Edit, LeftArrow } from "../../icons";
import { Link } from "react-router-dom";
import Back from "../../components/Back";
import Balance from "./../../components/PaymentDetails/Balance";
import Table from "../../components/Table";
import { transactions } from "../../constants";
import { useState, useEffect } from "react";
import TransactionsDetails from "../../components/TransactionDetails";
import Btns from "../../assets/btns.svg";
import TableResponsive from "./../../components/TableResponsive";
import useWindowWidth from "../../hooks/windowwidth";

const PaymentDetails = () => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useWindowWidth();
  const [ctas, setCtas] = useState(false);

  const handleClick = (evt) => {
    evt.stopPropagation();
    setCtas(!ctas);
  };

  return (
    <div className="paymentdetails" onClick={() => setCtas(false)}>
      <Back to="/payment/pay" title="Back" />
      <div className="paymentdetails_header">
        <h3 className="title title-black">Payment Page Name</h3>
        <div
          className={`paymentdetails_ctas ${
            ctas && "paymentdetails_ctas-reveal"
          }`}
        >
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
        <div onClick={handleClick} className="paymentdetails_actions">
          <img src={Btns} alt="Click to copy, edit or delete link" />
        </div>
      </div>
      <h5 className="title title-black  ">Balance</h5>
      <Balance />
      <h3 className="title title-black mt-small mb-small">Transactions</h3>
      {width > 500 && (
        <Table data={transactions} onclick={() => setShow(true)} />
      )}
      {width <= 500 && <TableResponsive data={transactions} />}
      {show && (
        <TransactionsDetails close={setShow} onclick={() => setShow(true)} />
      )}
    </div>
  );
};

export default PaymentDetails;
