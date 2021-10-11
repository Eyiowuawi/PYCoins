import Modal from "./Modal";
import deleteImg from "../../assets/delete.svg";
import Button from "./Button";

const Delete = ({ close, mutate }) => {
  return (
    <Modal close={close}>
      <div className="remove">
        <img src={deleteImg} alt="Delete" />
        <p className="title">Are you sure?</p>
        <p className="title title-grey ta">
          Deleting this payment page means you will loose all the transaction
          history attached to this payment page but your balance will still be
          intact.
        </p>
        <Button onclick={() => mutate()} bg={"button_remove"}>
          Continue to Delete
        </Button>
      </div>
    </Modal>
  );
};

export default Delete;
