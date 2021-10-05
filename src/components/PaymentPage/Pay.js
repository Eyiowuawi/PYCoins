import { Copy, LeftArrow } from "../../icons";
import QRCode from "../../assets/qrcode.png";
import ActionLabel from "./../UI/ActionLabel";
import handleCopy from "./../../utils/copytoclipboard";
import QrcodeGenerator from "../QrCode";
import SmallLoader from "./../UI/SmallLoader";
const Pay = ({ goBack, data }) => {
  return (
    <div className="">
      <div className="popupform_back" onClick={goBack}>
        <LeftArrow fill={"#333333"} />
      </div>
      <h3 className="ta title-black title mb-small">Pay</h3>
      <div className="paymentpage_pay">
        <p className="title title-grey ta">
          To Pay, open your cryto wallet app and send the amount to the wallet
          address below.
        </p>
        <div className="paymentpage_qr">
          <QrcodeGenerator value={data?.address} />
        </div>
        <div className="paymentpage_wallets">
          <div className="mb-small">
            <p className="title title-grey mb-smaller">AMOUNT</p>
            <ActionLabel
              // style="mt-small"
              text={`${data?.amount.amountInCrypto} (${data?.amount.currency.sign}${data?.amount.amountInUsd})`}
              onclick={() => handleCopy(data?.amount.amountInCrypto)}
            >
              <Copy fill="#909198" />
            </ActionLabel>
          </div>
          <div>
            <p className="title title-grey mb-smaller">WALLET ADDRESS</p>
            <ActionLabel
              text={`${data?.address}`}
              onclick={() => handleCopy(data?.address)}
            >
              <Copy fill="#909198" />
            </ActionLabel>
          </div>
        </div>
      </div>
      <div className="paymentpage_loader">
        <SmallLoader isLoading={true} />
        <p className="title title-grey ta"> Awaiting Payment </p>
      </div>
    </div>
  );
};

export default Pay;
