import { LeftArrow } from "../../icons";
import Button from "../UI/Button";
import Input from "../UI/Input";
import formGenerator from "./../../utils/formGenerator";

const WithdrawForm = ({
  withdraw,
  goBack,
  withdrawForm,
  setForm,
  validForm,
  setValidForm,
  crypto,
}) => {
  const form = formGenerator(withdrawForm, setForm, setValidForm);
  return (
    <div className="popupform">
      <div className="popupform_back" onClick={goBack}>
        <LeftArrow fill={"#333333"} />
      </div>
      <h3 className="title title-black ta ">Withdraw</h3>
      <p className="title title-grey mt-small">
        Enter the amount of {crypto.rate} that you you’d like to withdraw
      </p>
      <form className="mt-small">{form}</form>
      <Button disabled={validForm} onclick={withdraw} bg="button_primary">
        Continue
      </Button>
    </div>
  );
};

export default WithdrawForm;
