import Modal from "./UI/Modal";

import error from "../assets/error.svg";
import Button from "./UI/Button";
const Error = ({ close }) => {
  return (
    <Modal close={close}>
      <div className="error">
        <img src={error} alt="Error" />
        <h5 className="mb-small errortitle">Error proccessing your request at this time</h5>
        <p className="title title-grey mb-small ">
         Reload the browser or try again later
        </p>
        <Button disabled bg="button_grey">
          Reload
        </Button>
      </div>
    </Modal>
  );
};

export default Error;
