import { Arrow } from "../../icons";
const PaymentTableResponsive = ({ data, gotoDetails }) => {
  return (
    <div className="paymenttableresponsive" >
      {data.map((item) => (
        <div className="paymenttableresponsive_item" onClick={gotoDetails}>
          <div>
            <p className="td mb-smaller">{item.name}</p>
            <p className="td">{item.amount}</p>
          </div>
          <div>
            <Arrow />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentTableResponsive;
