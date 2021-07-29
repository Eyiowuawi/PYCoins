import Modal from "../UI/Modal";
import QRCode from "../../assets/qrcode.png";
// import Copy from "../../assets/copy.svg";
import { Copy } from "../../icons";

const FundWallet = ({ close }) => {
  return (
    <Modal close={close}>
      <h3 className="title title-black">Fund Wallet</h3>
      <div className="fund ">
        <div className="fund_img">
          <img src={QRCode} alt="Barcode Scanner" />
        </div>
        <p>WALLET ADDRESS</p>
        <div className="fund_wallet mt-small">
          <p>3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</p>
          <Copy fill="#909198" />
        </div>
        <div className="fund_details mt-small">
          <p>BTC BALANCE</p>
          <p>0 BTC = NGN 0.00</p>
        </div>
      </div>
    </Modal>
  );
};

export default FundWallet;
