import { cryptos } from "../../constants";
import Accounts from "../Account";
import Modal from "./../UI/Modal";

const Select = () => {
  return (
    <Accounts
      cryptos={cryptos}
      header="Select Payment Method"
      title="PAY WITH"
      name=""
    />
  );
};

export default Select;
