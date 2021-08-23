import { useState } from "react";
import { ModalContext } from "../../context";

import Modal from "../UI/Modal";
import Business from "../Auth/Business";
import useBusinessForm from "../../hooks/businessform";
import Response from "../UI/Response";

import Success from "../../assets/success.svg";

const BusinessForm = ({ close }) => {
  // const { setShow } = useContext(ModalContext);
  const [success, setSuccess] = useState();

  const [
    businessForm,
    setBusinessForm,
    businessFormValid,
    setBusinessFormVallid,
  ] = useBusinessForm();

  return (
    <Modal close={close}>
      {!success && (
        <Business
          businessForm={businessForm}
          handleSubmit={() => setSuccess(true)}
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
