// import { cryptos } from "../../constants";
import Accounts from "../Account";
import Modal from "./../UI/Modal";

const Select = ({ name, onclick, cryptos }) => {
  return (
    <Accounts
      cryptos={cryptos}
      header="Select Payment Method"
      title="PAY WITH"
      name={name}
      showForm={onclick}
    />
  );
};

export default Select;
