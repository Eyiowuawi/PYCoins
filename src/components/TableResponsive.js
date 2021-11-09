import Sent from "../assets/sent.svg";
import Received from "../assets/received.svg";

const TableResponsive = ({ data, onclick, currency }) => {
  console.log(data);
  return (
    <div className="tableresponsive">
      {data?.map((item) => (
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
            {item.type === "send" ? (
              <span className="td">Sent ${currency}</span>
            ) : (
              <span className="td">Received ${currency}</span>
            )}
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
