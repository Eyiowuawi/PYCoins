import { Copy, LeftArrow } from "../../icons";
import QRCode from "../../assets/qrcode.png";
const Pay = ({goBack}) => {
  return (
    <div className="">
      <div className="popupform_back" onClick={goBack}>
        <LeftArrow fill={"#333333"} />
      </div>
      <h3 className="ta title-black title mb-small">Pay</h3>
      <div className="paymentpage_pay">
        <p className="title title-grey ta">
          To Pay, open your Bitcoin wallet app and send the BTC amount to the
          wallet address below. John will automatically receive the payment
          after confirmation.
        </p>
        <div className="paymentpage_qr">
          <img src={QRCode} alt="Barcode scanner" />
        </div>
        <div className="paymentpage_wallets">
          <div className="mb-small">
            <p className="title title-grey mb-smaller">WALLET ADDRESS</p>
            <div className="fund_wallet ">
              <p>3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</p>
              <Copy fill="#909198" />
            </div>
          </div>
          <div>
            <p className="title title-grey mb-smaller">WALLET ADDRESS</p>
            <div className="fund_wallet ">
              <p>3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</p>
              <Copy fill="#909198" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
