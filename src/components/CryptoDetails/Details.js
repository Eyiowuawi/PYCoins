import Button from "../UI/Button";

import Plus from "../../assets/plus.svg";

import { RightArrow } from "../../icons/index";

const Details = ({ crypto, setFund, setWithdraw }) => (
  <>
    <div className="cryptodetails_name">
      <div type={crypto.name} className={"crypto_img"}>
        <img src={crypto.img} alt={crypto.name} />
      </div>
      <p className="title title-grey">{crypto.name}</p>
    </div>
    <p className="title title-grey mt-small">TOTAL BALANCE</p>
    <p className="title title-grey mt-small">0.00 BTC</p>
    <div className="cryptodetails_btns">
      <Button
        disabled={true}
        bg={"button_primary"}
        onclick={() => setFund(true)}
      >
        <img src={Plus} alt="Add" className="" />
        <span>Fund</span>
      </Button>
      <Button
        disabled={true}
        bg={"button_white"}
        onclick={() => setWithdraw(true)}
      >
        <RightArrow fill="#48d189" />
        <span> Withdraw</span>
      </Button>
    </div>
  </>
);

export default Details;
