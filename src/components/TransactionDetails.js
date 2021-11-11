import Modal from "./UI/Modal";
const TransactionsDetails = ({ close, details }) => {
  return (
    <Modal close={close}>
      <div className="transdetails">
        <h2 className="title title-black">Transaction Details</h2>
        <div className="transdetails_box">
          <div className="transdetails_item">
            <p className="title title-grey">Wallet Address</p>
            <p className="title title-grey">{details?.address || ""}</p>
          </div>
          {details?.name && (
            <div className="transdetails_item">
              <p className="title title-grey">Name</p>
              <p className="title title-grey">{details?.name}</p>
            </div>
          )}
          {details?.email && (
            <div className="transdetails_item">
              <p className="title title-grey">Email</p>
              <p className="title title-grey">{details?.email}</p>
            </div>
          )}
          <div className="transdetails_item">
            <p className="title title-grey">Amount</p>
            <p className="title title-grey">
              ${parseFloat(details?.amount).toFixed(6)}
            </p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Date</p>
            <p className="title title-grey">{details?.date}</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Status</p>
            <p className="title title-grey status" type={details?.status}>
              {details?.status}
            </p>
          </div>
          {details?.message && (
            <div className="transdetails_item">
              <h5 className="title title-grey  mt-small">Message</h5>
              <p className="title title-grey">{details?.message}</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default TransactionsDetails;
