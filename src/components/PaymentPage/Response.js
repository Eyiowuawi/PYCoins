import Response from "./../UI/Response";

import Img from "../../assets/success.svg";
import failed from "../../assets/failed.svg";

const Success = () => (
  <Response
    img={failed}
    title="Payment Successfull"
    text="Your payment of NGN 10,000 was successful."
  />
);

export default Success;
