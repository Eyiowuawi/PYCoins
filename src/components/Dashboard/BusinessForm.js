import { useContext, useState } from "react";
import { ModalContext } from "../../context";

import Modal from "../UI/Modal";
import Business from "../Auth/Business";
import useBusinessForm from "../../hooks/businessform";
import Response from "../UI/Response";

import Success from "../../assets/success.svg";

const BusinessForm = () => {
  const { setShow } = useContext(ModalContext);
  const [success, setSuccess] = useState();

  const [businessForm] = useBusinessForm();

  return (
    <Modal close={setShow}>
      {!success && (
        <Business
          businessForm={businessForm}
          handleSubmit={() => setSuccess(true)}
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
