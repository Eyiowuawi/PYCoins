import { useState } from "react";
import { ModalContext } from "../../context";

import Modal from "../UI/Modal";
import Business from "../Auth/Business";
import useBusinessForm from "../../hooks/businessform";
import Response from "../UI/Response";

import Success from "../../assets/success.svg";
import { useMutation } from "react-query";
import { switchToBusiness } from "../../services/user";

const BusinessForm = ({ close }) => {
  // const { setShow } = useContext(ModalContext);
  const [success, setSuccess] = useState();

  const { mutate, data } = useMutation(
    (param) => {
      switchToBusiness(param);
    },
    {
      mutationFn: "switch",
    }
  );

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
    mutate(params);
  };

  return (
    <Modal close={close}>
      {!success && (
        <Business
          businessForm={businessForm}
          handleSubmit={handleSubmit}
          businessFormUpdate={setBusinessForm}
          businessFormValid={businessFormValid}
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
