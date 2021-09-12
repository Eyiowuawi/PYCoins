import Response from "../UI/Response";
import Success from "../../assets/success.svg";
import { Copy } from "../../icons";
import Received from "../../assets/received.svg";
import Button from "./../UI/Button";
import handleClick from "./../../utils/copytoclipboard";
const Created = ({ data }) => {
  return (
    <Response
      img={Success}
      title="Your payment page has been created!"
      text="  Your friends, family, customers or anyone anywhere around the world can
        now pay you directly through this payment link."
    >
      <div className="payment_created mt-small">
        <button
          type="submit"
          className={"button button_primary"}
          onClick={() => handleClick(data?.paymenturl)}
        >
          <Copy fill="#FFFFFF" />
          <span> Copy Link</span>
        </button>
        <a
          className={"button button_white"}
          href={data?.paymenturl}
          target="_blank"
          rrel="noreferrer"
        >
          <img src={Received} alt="Sucess" />
          <span> View Link</span>
        </a>
      </div>
    </Response>
  );
};

export default Created;
