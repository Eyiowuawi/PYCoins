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
import formGenerator from "../../utils/formgenerator";
import WithLoadingComponent from "./../../hoc/withLoading";
import { AppContext } from "./../../context/index";
import { useRouteMatch } from "react-router-dom";
import { useGetPaymentInfo } from "./../../query/getPaymentInfo";
import { useGetCrypto } from "./../../query/getCryptos";
import { cryptos } from "../../constants/index";

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
  const { data: cryptoData } = useGetCrypto();
  useEffect(() => {
    if (error?.message === "404") history.push("/pageNotFound");
  }, [error]);

  console.log(cryptoData);
  const userCryptos = useMemo(() => {
    const availableCrypto = data?.paymentPage.availableCrypto;
    const filteredCrypto = cryptoData?.filter((item) => {
      return availableCrypto.includes(item.slug);
    });
    console.log(filteredCrypto);
    const cryptoObject = filteredCrypto.map((crypto) => {
      cryptos?.forEach((item) => {
        if (item.slug === crypto.slug) console.log(true);
      });
    });
    return cryptoObject;
  }, [data, cryptoData]);
  // console.log(userCryptos);
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
      {show && <PaymentProcess crypto={cryptoData} close={setShow} />}
    </>
  );
};

export default PaymentPage;
