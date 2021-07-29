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
        <Response>
          <img src={Success} alt="Success" />
          <h3 className="title title-black">Verification Submitted</h3>
          <p className="title title-grey ta">
            Your business document has been submitted successfully and in
            currently in progress. You wil receive an email after being verified
            by the team.
          </p>
        </Response>
      )}
    </Modal>
  );
};

export default BusinessForm;
