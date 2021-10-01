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
import { useDisablePaymentLink } from "../../query/disablePaymentLink";
import { toast } from "react-toastify";
import { useGetUserWallets } from "./../../query/getCryptos";
import usePaymentForm from "./../../hooks/paymentform";
import useAmount from "./../../hooks/amountform";
import PaymentForm from "./../../components/Payment/PaymentForm";

const PaymentDetails = ({ history }) => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useWindowWidth();
  const [ctas, setCtas] = useState(false);
  const { params } = useRouteMatch();
  const { data, isLoading } = useGetUserPaymentLink(params.id);
  console.log(data);

  const editDetails = useMemo(() => {
    const editParams = {
      pageName: data?.paymentPage.metaData.name,
      desc: data?.paymentPage.metaData.description,

      cryptos: data?.paymentPage.availableCrypto,
      // amount: data?.paymentPage.amount,
    };
    return editParams;
  }, [data]);
  const { data: userData } = useGetUserWallets();
  const userAcceptedWallet = useMemo(() => {
    return userData;
  }, [userData]);
  const [isEdit, setIsEdit] = useState(false);
  const [paymentForm, setPayentForm, paymentFormValid, setPaymentFormValid] =
    usePaymentForm(userAcceptedWallet, editDetails);
  const [amountForm, setAmountForm] = useAmount(data?.paymentPage.amount);

  const {
    data: deleteData,
    isLoading: deleteLoading,
    mutate: deleteMutate,
  } = useDeletePaymentLink(data?.paymentlink._id, history);

  const { isLoading: disableLoading, mutate: disableMutate } =
    useDisablePaymentLink(data?.paymentlink._id);

  useEffect(() => {
    if (deleteLoading)
      toast.info("Deleting Link", { autoClose: !deleteLoading });
  }, [deleteLoading]);

  const updatedData = useMemo(() => {
    const updatedPaymentLink = data && addPaymentUrl(data?.paymentlink);

    return updatedPaymentLink;
  }, [data]);

  const handleDelete = (evt) => {
    evt.preventDefault();
    deleteMutate();
  };

  const handleDisable = (evt) => {
    evt.preventDefault();
    disableMutate();
  };
  return (
    <>
      <WithLoadingComponent isLoading={isLoading}>
        <div className="paymentdetails" onClick={() => setCtas(false)}>
          <Back to="/payment/pay" title="Back" />
          <PaymentHeader
            handleDelete={handleDelete}
            link={updatedData}
            ctas={ctas}
            handleDisable={handleDisable}
            handleEdit={() => setIsEdit(true)}
          />
          <h5 className="title title-black  ">Balance</h5>
          <Balance />
          <h3 className="title title-black mt-small mb-small">Transactions</h3>
          {width > 500 && (
            <Table data={transactions} onclick={() => setShow(true)} />
          )}
          {width <= 500 && <TableResponsive data={transactions} />}
          {show && (
            <TransactionsDetails
              close={setShow}
              onclick={() => setShow(true)}
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
