import Response from "./../UI/Response";

import success from "../../assets/success.svg";
import failed from "../../assets/failed.svg";

const Success = ({ event }) => (
  <Response
    img={event === "Payment Completed" ? success : failed}
    title={
      event === "Payment Completed"
        ? "Payment Successful"
        : "Payment Incomplete"
    }
    text={
      event === "Payment Completed"
        ? "Your payment  was successful."
        : "You made an imcomplete Payment"
    }
  />
);

export default Success;
