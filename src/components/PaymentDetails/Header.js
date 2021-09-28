import { Copy, Delete, Edit, LeftArrow, Disable } from "../../icons";
import Btns from "../../assets/btns.svg";
import handleCopy from "./../../utils/copytoclipboard";

const PaymentHeader = ({
  ctas,
  handleClick,
  Btns,
  link,
  handleDelete,
  handleDisable,
  handleEdit,
}) => {
  return (
    <div className="paymentdetails_header">
      <h3 className="title title-black">{link?.pageName}</h3>
      <div
        className={`paymentdetails_ctas ${
          ctas && "paymentdetails_ctas-reveal"
        }`}
      >
        <button onClick={() => handleCopy(link?.paymenturl)}>
          <Copy fill="#787676" />
          <p className="title title-grey">Copy Link</p>
        </button>
        <button
          type="submit"
          role="button"
          aria-label="edit-button"
          onClick={handleEdit}
        >
          <Edit fill="#787676" />
          <p className="title title-grey">Edit</p>
        </button>
        <button
          type="submit"
          role="button"
          aria-label="disable-button"
          onClick={handleDisable}
        >
          <Disable />
          <p className="title title-grey">Disable</p>
        </button>
        <button
          type="submit"
          role="button"
          aria-label="delete-button"
          onClick={handleDelete}
        >
          <Delete />
          <p className="delete">Delete</p>
        </button>
      </div>
      <div onClick={handleClick} className="paymentdetails_actions">
        <img src={Btns} alt="Click to copy, edit or delete link" />
      </div>
    </div>
  );
};

export default PaymentHeader;
