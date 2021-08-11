import Received from "../assets/received.svg";
import Sent from "../assets/sent.svg";

const TableResponsive = ({ data, onclick }) => {
  return (
    <div className="tableresponsive">
      {data.map((item) => (
        <div key={item.id} className="tableresponsive_item" onClick={onclick}>
          <div
            className={`tableresponsive_sign ${
              item.type === "Sent" ? "sent" : "received"
            }`}
          >
            <img src={item.type === "Sent" ? Sent : Received} alt="Icon" />
          </div>
          <div className="tableresponsive_details">
            <p className="td"> {item.name} </p>
            <p className="td">{item.amount}</p>
          </div>
          <div className="tableresponsive_amount">
            <p
              className={
                item.status === "Failed"
                  ? "failed"
                  : item.status === "Pending"
                  ? "pending"
                  : "success"
              }
            >
              {" "}
              {item.status}
            </p>
            <p className="td">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableResponsive;
