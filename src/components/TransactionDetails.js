import Modal from "./UI/Modal";
const TransactionsDetails = ({ close, details }) => {
  return (
    <Modal close={close}>
      <div className="transdetails">
        <h2 className="title title-black">Transaction Details</h2>
        <div className="transdetails_box">
          <div className="transdetails_item">
            <p className="title title-grey">Wallet Address</p>
            <p className="title title-grey">{details.address}</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Name</p>
            <p className="title title-grey">{details.name}</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Email</p>
            <p className="title title-grey">{details.email}</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Amount</p>
            <p className="title title-grey">${details.amount}</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Date</p>
            <p className="title title-grey">{details.date}</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Status</p>
            <p className="title title-grey">{details.status}</p>
          </div>
        </div>
        <div>
          <h5 className="title title-grey  mt-small">Message</h5>
          <p className="title title-grey">{details.message}</p>
        </div>
        <p className="title title-grey mt-small">
          Thank you so much for thinking of me! I love serving on your team. A
          message is a discrete unit of communication intended by the source for
          consumption by some recipient or group of recipients.
        </p>
      </div>
    </Modal>
  );
};

export default TransactionsDetails;
