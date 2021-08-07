import { Copy, LeftArrow } from "../../icons";
import QRCode from "../../assets/qrcode.png";
import ActionLabel from "./../UI/ActionLabel";
const Pay = ({ goBack }) => {
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
            <ActionLabel
              // style="mt-small"
              text="3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5"
            >
              <Copy fill="#909198" />
            </ActionLabel>
          </div>
          <div>
            <p className="title title-grey mb-smaller">WALLET ADDRESS</p>
            <ActionLabel text="3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5">
              <Copy fill="#909198" />
            </ActionLabel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
