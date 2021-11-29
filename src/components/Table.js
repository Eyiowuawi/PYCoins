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
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
                    <span>Sent {currency}</span>
                  ) : (
                    <span>Received {currency}</span>
                  )}
                </td>
              )}
              {item.paymentType && (
                <td>
                  {item.paymentType} {item.walletType}
                </td>
              )}
              {item.name && <td>{item.name}</td>}
              {item.email && <td>{item.email}</td>}
              <td>
                {parseFloat(item.amount).toFixed(6)}{" "}
                {item.cryptoType && item.cryptoType}
              </td>
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
