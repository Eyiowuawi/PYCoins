import useBankForm from "../../hooks/bankForm";
import { LeftArrow } from "../../icons";
import Button from "../UI/Button";
import Primary from "../UI/Label";
import formGenerator from "../../utils/formGenerator";
const Bank = ({ goBack }) => {
  const [bankForm] = useBankForm();

  const form = formGenerator(bankForm);

  return (
    <div className="popupform">
      <div>
        <div className="popupform_back" onClick={goBack}>
          <LeftArrow fill={"#333333"} />
        </div>
        <h3 className="ta">Bank Account </h3>
      </div>
      <form>
        {form}
        <Primary />
        <Button bg={"button_primary"}>Save</Button>
      </form>
    </div>
  );
};

export default Bank;
