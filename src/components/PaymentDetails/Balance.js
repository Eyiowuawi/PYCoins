import Available from "../../assets/available.svg";
import Ledger from "../../assets/ledger.svg";
import Customer from "../../assets/customers.svg";

const Balance = () => {
  return (
    <div className="balance mt-small">
      <div className="balance_item">
        <img src={Available} alt="available balance" />
        <div className="balance_content">
          <p className="title title-grey mb-smaller">Available</p>
          <p className="mute mb-smaller">2,434.57 USD</p>
          <p className="title title-grey mb-smaller">1,000,000.00 NGN</p>
        </div>
      </div>
      <div className="balance_item">
        <img src={Ledger} alt="available balance" />
        <div className="balance_content">
          <p className="title title-grey mb-smaller">Ledger Balance</p>
          <p className="mute mb-smaller">500, 000 USD</p>
          <p className="title title-grey mb-smaller">205,655.00 NGN</p>
        </div>
      </div>
      <div className="balance_item">
        <img src={Customer} alt="available balance" />
        <div className="balance_content">
          <p className="title title-grey mb-smaller">Total Customers</p>
          <p className="mute">276</p>
        </div>
      </div>
    </div>
  );
};
export default Balance;
