import Modal from "../UI/Modal";
import QRCode from "../../assets/qrcode.png";
import { Copy } from "../../icons";
import ActionLabel from "./../UI/ActionLabel";

const FundWallet = ({ close }) => {
  return (
    <Modal close={close}>
      <h3 className="title title-black">Fund Wallet</h3>
      <div className="fund ">
        <div className="fund_img">
          <img src={QRCode} alt="Barcode Scanner" />
        </div>
        <p className="title title-grey">WALLET ADDRESS</p>
        <ActionLabel style="mt-small" text="3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5">
          <Copy fill="#909198" />
        </ActionLabel>
        <div className="fund_details mt-small">
          <p className="title title-grey">BTC BALANCE</p>
          <p className="title title-grey">0 BTC = NGN 0.00</p>
        </div>
      </div>
    </Modal>
  );
};

export default FundWallet;
