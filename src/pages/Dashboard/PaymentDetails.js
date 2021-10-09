import { useState, useEffect, useMemo } from "react";
import { useRouteMatch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

import WithLoadingComponent from "./../../hoc/withLoading";

import Back from "../../components/Back";
import Balance from "./../../components/PaymentDetails/Balance";
import Table from "../../components/Table";
import Empty from "../../components/Empty";
import TransactionsDetails from "../../components/TransactionDetails";
import TableResponsive from "./../../components/TableResponsive";
import PaymentHeader from "./../../components/PaymentDetails/Header";
import PaymentForm from "./../../components/Payment/PaymentForm";

import { useGetUserPaymentLink } from "../../query/getUserPaymentLink";
import { useGetUserWallets } from "../../query/getCryptos";
import { useDeletePaymentLink } from "../../query/deletePaymentLink";
import { useDisablePaymentLink } from "../../query/disablePaymentLink";
import { useGetPaymentTransactions } from "../../query/getPaymentTransactions";

import useWindowWidth from "../../hooks/windowWidth";
import useAmount from "../../hooks/amountForm";
import usePaymentForm from "../../hooks/paymentForm";

import { addPaymentUrl } from "./../../utils/addPaymentUrl";
import { formatTransactions } from "../../utils/formatTransaction";

import empty from "../../assets/empty.svg";

const PaymentDetails = ({ history }) => {
  const [show, setShow] = useState(false);
  const [ctas, setCtas] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selected, setSelected] = useState({});

  const { params } = useRouteMatch();

  const [width] = useWindowWidth();

  const { data } = useGetUserPaymentLink(params.id);

  const { data: paymentData, isFetching: linkFetching } =
    useGetPaymentTransactions(params.id);

  const { data: userData } = useGetUserWallets();

  const [paymentForm, setPayentForm, paymentFormValid, setPaymentFormValid] =
    usePaymentForm(userAcceptedWallet, editDetails);

  const [amountForm, setAmountForm] = useAmount(data?.paymentPage.amount);

  const { isLoading: deleteLoading, mutate: deleteMutate } =
    useDeletePaymentLink(data?.paymentlink._id, history);

  const { mutate: disableMutate } = useDisablePaymentLink(
    data?.paymentlink._id
  );

  const editDetails = useMemo(() => {
    const editParams = {
      pageName: data?.paymentPage.metaData.name,
      desc: data?.paymentPage.metaData.description,
      cryptos: data?.paymentPage.availableCrypto,
    };
    return editParams;
  }, [data]);

  const userAcceptedWallet = useMemo(() => {
    return userData;
  }, [userData]);

  const transactions = useMemo(() => {
    if (paymentData?.length > 0) {
      return formatTransactions(paymentData);
    }
  }, [paymentData]);

  const updatedData = useMemo(() => {
    const updatedPaymentLink = data && addPaymentUrl(data?.paymentlink);

    return updatedPaymentLink;
  }, [data]);

  useEffect(() => {
    if (deleteLoading)
      toast.info("Deleting Link", { autoClose: !deleteLoading });
  }, [deleteLoading]);

  // Function Handlers

  const handleClick = (evt) => {
    evt.stopPropagation();
    setCtas(!ctas);
  };

  const handleDelete = (evt) => {
    evt.preventDefault();
    deleteMutate();
  };

  const handleDisable = (evt) => {
    evt.preventDefault();
    disableMutate();
  };

  const selectedTransaction = (id) => {
    const transaction = transactions.find((item) => item.id === id);
    setSelected(transaction);
    setShow(true);
  };
  return (
    <>
      <WithLoadingComponent isLoading={linkFetching}>
        <div className="paymentdetails" onClick={() => setCtas(false)}>
          <Helmet>
            <title>{updatedData?.pageName} - Payercoins</title>
          </Helmet>
          <Back to="/payment/pay" title="Back" />
          <PaymentHeader
            handleDelete={handleDelete}
            link={updatedData}
            ctas={ctas}
            handleDisable={handleDisable}
            handleEdit={() => setIsEdit(true)}
            click={handleClick}
          />
          <h5 className="title title-black  ">Balance</h5>
          <Balance />
          <h3 className="title title-black mt-small mb-small">Transactions</h3>

          {(transactions?.length < 1 || !transactions) && (
            <Empty>
              <img src={empty} alt="Empty State" />
              <h3 className="title title-black mb-small mt-small">
                You don't have any transaction yet
              </h3>
              <p className="title title-grey ">
                Create a payment link to start requesting money from friends,
                family, customers or anyone anywhere around the world.
              </p>
            </Empty>
          )}
          {transactions?.length > 0 && (
            <>
              {width > 500 && (
                <Table data={transactions} onclick={selectedTransaction} />
              )}
              {width <= 500 && (
                <TableResponsive
                  data={transactions}
                  onclick={selectedTransaction}
                />
              )}
            </>
          )}
          {show && (
            <TransactionsDetails
              close={() => setShow(false)}
              details={selected}
            />
          )}
        </div>
      </WithLoadingComponent>
      {isEdit && (
        <PaymentForm
          paymentForm={paymentForm}
          setPaymentForm={setPayentForm}
          paymentFormValid={paymentFormValid}
          setPaymentFormValid={setPaymentFormValid}
          amountForm={amountForm}
          setAmountForm={setAmountForm}
          show={isEdit}
          isEditMode={isEdit}
          handleClose={() => setIsEdit(false)}
          amountType={data?.paymentPage.amountType}
        />
      )}
    </>
  );
};

export default PaymentDetails;
