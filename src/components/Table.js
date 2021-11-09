import Sent from "../assets/sent.svg";
import Received from "../assets/received.svg";

const Table = ({ data, onclick, tableHead, currency }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHead.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data
          ?.sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((item) => (
            <tr key={item.id} onClick={() => onclick(item.id)}>
              {item.type && (
                <td>
                  <span className={item.type === "send" ? "sent" : "received"}>
                    <img
                      src={item.type === "send" ? Sent : Received}
                      alt={item.type}
                    />
                  </span>
                  {item.type === "send" ? (
                    <span>Sent ${currency}</span>
                  ) : (
                    <span>Received ${currency}</span>
                  )}
                </td>
              )}
              {item.name && <td>{item.name}</td>}
              {item.email && <td>{item.email}</td>}
              <td>{parseFloat(item.amount).toFixed(6)}</td>
              <td>{item.date}</td>
              <td>
                <span
                  className={
                    item.status === "Failed"
                      ? "failed"
                      : item.status === "pending"
                      ? "pending"
                      : item.status === "successful"
                      ? "success"
                      : item.status === "confirmed"
                      ? "success"
                      : null
                  }
                >
                  {" "}
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
