import { LeftArrow } from "../../icons";
import Button from "../UI/Button";
import Input from "../UI/Input";

const WithdrawForm = ({ withdraw, goBack}) => {
  return (
    <div className="popupform">
      <div className="popupform_back" onClick={goBack}>
        <LeftArrow fill={"#333333"} />
      </div>
      <h3 className="title title-black ta ">Withdraw</h3>
      <p className="title title-grey mt-small">
        Enter the amount of BTC that you you’d like to withdraw
      </p>
      <form className="mt-small">
      <Input
        type="number"
        elementType="input"
        placeholder="Enter Amount to withdraw"
        value=""
      />
      </form>
      <Button onclick={withdraw} bg="button_primary">
        Continue
      </Button>
    </div>
  );
};

export default WithdrawForm;
