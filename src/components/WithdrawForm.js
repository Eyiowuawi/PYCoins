import { LeftArrow } from "../icons";
import Button from "./UI/Button";
import Input from "./UI/Input";

const WithdrawForm = () => {
  return (
    <div className="popupform">
      <div className="popupform_back">
        <LeftArrow fill={"#333333"} />
      </div>
      <h3 className="title title-black ta">Withdraw</h3>
      <p className="title title-grey mt-small mb-small">
        Enter the amount of BTC that you you’d like to withdraw
      </p>
      <Input
        type="number"
        elementType="input"
        placeholder="Enter Amount to withdraw"
        value=""
      />
      <Button bg="button_primary">Continue</Button>
    </div>
  );
};

export default WithdrawForm;
