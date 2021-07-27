import Input from "./UI/Input";
import { LeftArrow } from "../icons";
import Primary from "./UI/Primary";
import Button from "./UI/Button";

const CryptoForm = ({ name, goBack }) => {
  return (
    <div className="popupform">
      <div className="popupform_back" onClick={goBack}>
        <LeftArrow fill={"#333333"} />
      </div>
      <h3 className="ta title title-black"> {name}</h3>
      <form>
        <Input
          elementType="input"
          placeholder="Wallet Address"
          value=""
          type="text"
        />
        <Primary />
        <Button bg={"button_primary"}>Save</Button>
      </form>
    </div>
  );
};

export default CryptoForm;
