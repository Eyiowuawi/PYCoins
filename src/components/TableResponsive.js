import Sent from "../assets/sent.svg";
import Received from "../assets/received.svg";

const TableResponsive = ({ data, onclick, currency }) => {
  return (
    <div className="tableresponsive">
      {data
        ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((item) => (
          <div
            key={item.id}
            className="tableresponsive_item"
            onClick={() => onclick(item.id)}
          >
            {item.name && <p className="td name">{item.name}</p>}
            {item.type && (
              <span
                className={`type ${item.type === "send" ? "sent" : "received"}`}
              >
                <img
                  src={item.type === "send" ? Sent : Received}
                  alt={item.type}
                />
              </span>
            )}
            <div className="tableresponsive_details">
              {item.email && <p className="td"> {item.email} </p>}
              {item.type && item.type === "send" ? (
                <span className="td">Sent {currency}</span>
              ) : item.type && item.type === "received" ? (
                <span className="td">Received {currency}</span>
              ) : (
                ""
              )}
              {item.paymentType && <p className="td">{item.paymentType}</p>}
              <p className="td">{parseFloat(item.amount).toFixed(6)}</p>
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
