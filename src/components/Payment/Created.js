import Response from "../UI/Response";
import Success from "../../assets/success.svg";
import { Copy } from "../../icons";
import Received from "../../assets/received.svg";
import Button from "./../UI/Button";
import WithCopyToClipboard from "./../../hoc/withCopyToClipboard";
const Created = ({ data }) => {
  // console.log(data);
  return (
    <Response
      img={Success}
      title="Your payment page has been created!"
      text="  Your friends, family, customers or anyone anywhere around the world can
        now pay you directly through this payment link."
    >
      <div className="payment_created mt-small">
        <WithCopyToClipboard text={data?.paymenturl}>
          <button type="submit"  className={"button button_primary"}>
            <Copy fill="#FFFFFF" />
            <span> Copy Link</span>
          </button>
        </WithCopyToClipboard>
        <Button disabled={true} bg={"button_white"}>
          <img src={Received} alt="Sucess" />
          <span> View Link</span>
        </Button>
      </div>
    </Response>
  );
};

export default Created;
