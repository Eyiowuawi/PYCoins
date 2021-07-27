import Modal from "./UI/Modal";
const TransactionsDetails = ({close}) => {
  return (
    <Modal close={close}>
      <div className="transdetails">
        <h2>Transaction Details</h2>
        <div className="transdetails_box">
          <div className="transdetails_item">
            <p className="title title-grey">Name</p>
            <p className="title title-grey">Jack Ma</p>
          </div>

          <div className="transdetails_item">
            <p className="title title-grey">Email</p>
            <p className="title title-grey">jackma@gmail.com</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Amount</p>
            <p className="title title-grey">NGN 15,000,000</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Date</p>
            <p className="title title-grey">June 10, 2021</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Status</p>
            <p className="title title-grey">Success</p>
          </div>
          <div className="transdetails_item">
            <p className="title title-grey">Hash</p>
            <p className="title title-grey">DFCD 3454 BBEA 788A 751A</p>
          </div>
        </div>
        <div>
          <h5 className="title title-grey  mt-small">Message</h5>
          <p  className="title title-grey mt-small">
            Thank you so much for thinking of me! I love serving on your team. A
            message is a discrete unit of communication intended by the source
            for consumption by some recipient or group of recipients.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionsDetails;
