import Response from "../UI/Response";
import Success from "../../assets/success.svg";
import { Copy } from "../../icons";
import Received from "../../assets/received.svg";
import Button from "./../UI/Button";
const Created = () => {
  return (
    <Response
      img={Success}
      title="Your payment page has been created!"
      text="  Your friends, family, customers or anyone anywhere around the world can
        now pay you directly through this payment link."
    >
      <div className="payment_created mt-small">
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
