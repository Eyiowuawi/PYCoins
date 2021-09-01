import { useState, useEffect, useMemo } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import Back from "../../components/Back";
import Balance from "./../../components/PaymentDetails/Balance";
import Table from "../../components/Table";
import { transactions } from "../../constants";
import TransactionsDetails from "../../components/TransactionDetails";
import TableResponsive from "./../../components/TableResponsive";
import useWindowWidth from "../../hooks/windowwidth";
import PaymentHeader from "./../../components/PaymentDetails/Header";
import { useGetUserPaymentLink } from "../../query/getUserPaymentLink";
import WithLoadingComponent from "./../../hoc/withLoading";
import { addPaymentUrl } from "./../../utils/addPaymentUrl";
import { useDeletePaymentLink } from "../../query/deletePaymentLink";
import { toast } from "react-toastify";

const PaymentDetails = ({ history }) => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useWindowWidth();
  const [ctas, setCtas] = useState(false);
  const { params } = useRouteMatch();
  const { data, isLoading } = useGetUserPaymentLink(params.id);

  const {
    data: deleteData,
    isLoading: deleteLoading,
    mutate,
  } = useDeletePaymentLink(data?.paymentlink._id, history);

  useEffect(() => {
    if (deleteLoading) toast.info("Deleting Link", { autoClose: false });
  }, [deleteData, deleteLoading]);

  const updatedData = useMemo(() => {
    const updatedPaymentLink = data && addPaymentUrl(data?.paymentlink);

    return updatedPaymentLink;
  }, [data]);

  const handleDelete = (evt) => {
    evt.preventDefault();
    mutate();
  };
  return (
    <WithLoadingComponent isLoading={isLoading}>
      <div className="paymentdetails" onClick={() => setCtas(false)}>
        <Back to="/payment/pay" title="Back" />
        <PaymentHeader
          handleDelete={handleDelete}
          link={updatedData}
          ctas={ctas}
        />
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
    </WithLoadingComponent>
  );
};

export default PaymentDetails;
