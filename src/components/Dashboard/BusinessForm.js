import { useState, useContext, useEffect } from "react";

import Modal from "../UI/Modal";
import Business from "../Auth/Business";
import useBusinessForm from "../../hooks/businessform";
import Response from "../UI/Response";

import Success from "../../assets/success.svg";
import { useMutation, QueryClient } from "react-query";
import { switchToBusiness } from "../../services/user";
import WithErrorComponent from "./../../hoc/withError";
import { AppContext } from "./../../context/index";

const BusinessForm = ({ close, mutate, isLoading, data, show }) => {
  console.log(show);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (data && data?.success === "success") setSuccess(true);
  }, [data]);

  const [
    businessForm,
    setBusinessForm,
    businessFormValid,
    setBusinessFormVallid,
  ] = useBusinessForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const params = new FormData();
    for (let key in businessForm)
      params.append(`${key}`, businessForm[key].value);
    params.append("country", "Nigeria");
    mutate(params);
  };

  return (
    <Modal close={close}>
      {!success && (
        <Business
          businessForm={businessForm}
          handleSubmit={handleSubmit}
          businessFormUpdate={setBusinessForm}
          businessFormValid={businessFormValid || isLoading}
          setBusinessFormVallid={setBusinessFormVallid}
        />
      )}
      {success && (
        <Response
          img={Success}
          title="Verification Submitted"
          text="Your business document has been submitted successfully and in
        currently in progress. You wil receive an email after being verified
        by the team."
        />
      )}
    </Modal>
  );
};

export default BusinessForm;
