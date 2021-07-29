import Response from "../UI/Response";
import Success from "../../assets/success.svg";
import { Copy } from "../../icons";
import Received from "../../assets/received.svg";
import Button from "./../UI/Button";
const Created = () => {
  return (
    <Response>
      <img src={Success} alt="Success" className="mb-small" />
      <h3 className="title title-black mb-small">Your payment page has been created!</h3>
      <p className="title title-grey ta mb-small">
        Your friends, family, customers or anyone anywhere around the world can
        now pay you directly through this payment link.
      </p>
      <div className="payment_created mb-small">
        <Button bg={"button_primary"}>
          <Copy fill="#FFFFFF" />
          <span> Copy Link</span>
        </Button>
        <Button bg={"button_white"}>
          <img src={Received} alt="Sucess" />
          <span> View Link</span>
        </Button>
      </div>
    </Response>
  );
};

export default Created;
