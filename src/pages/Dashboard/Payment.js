import { useState, useEffect, useMemo, memo } from "react";
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
import { useGetPaymentLinks } from "./../../query/getPaymentLinks";
import { dateFormatter } from "./../../utils/dateformatter";
import WithLoadingComponent from "./../../hoc/withLoading";
import { addPaymentUrl } from "./../../utils/addPaymentUrl";
import { useGetWallets } from "./../../query/getWallets";
import { useGetUserWallets } from "./../../query/getCryptos";
import useAmount from "./../../hooks/amountform";
import { createPaymentLink } from "./../../services/paymentlink";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import useForceUpdate from "use-force-update";

const Payment = ({ history, isLoading }) => {
  const [show, setShow] = useState(false);

  const [width, setWidth] = useWindowWidth();

  const [paymentLinks, setPaymentLinks] = useState([]);

  const { data, isLoading: getLinksLoading } = useGetPaymentLinks();

  const { data: walletData } = useGetWallets();

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (data && !getLinksLoading) {
      const mappedArray = data?.paymentLinks?.map((item) => {
        const updatedData = addPaymentUrl(item);
        const date = dateFormatter(updatedData.createdAt);
        return {
          ...updatedData,
          createdAt: date,
        };
      });
      setPaymentLinks(mappedArray);
    }
  }, [data, getLinksLoading]);

  const handleChangePage = (slug, id) => {
    history.push(`/payment/pay/${slug}/${id}`);
  };

  // const handleCreateLink = (evt, isFixed) => {
  //   evt.preventDefault();
  //   mutate(data)
  //   // mutate(data);
  // };

  return (
    <WithLoadingComponent isLoading={isLoading || getLinksLoading}>
      <div className="payment">
        <div className="payment_container">
          <h3 className="title title-black">Payment Page</h3>
          <Button
            disabled={true}
            bg={"button_primary"}
            onclick={() => setShow(true)}
          >
            <img src={Plus} alt="Add" />
            <span>Create New</span>
          </Button>
        </div>
        {paymentLinks?.length < 1 && (
          <Empty>
            <img src={Link} alt="Empty State" />
            <h3 className="title title-black mb-small mt-small">
              You haven’t created any payment link yet!
            </h3>
            <p className="title title-grey ">
              Create a payment link to start requesting money from friends,
              family, customers or anyone anywhere around the world.
            </p>
          </Empty>
        )}
        {paymentLinks?.length > 0 && (
          <>
            {width > 400 && (
              <PaymentTable
                gotoDetails={handleChangePage}
                data={paymentLinks}
              />
            )}
          </>
        )}
        <>
          {width <= 400 && (
            <PaymentTableResponsive
              gotoDetails={handleChangePage}
              data={paymentLinks}
            />
          )}
        </>
      </div>
      {show && <PaymentForm show={show} setShow={setShow} />}
    </WithLoadingComponent>
  );
};

export default Payment;
