import Received from "../assets/received.svg";
import Sent from "../assets/sent.svg";

const Table = ({ data, onclick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id} onClick={() => onclick(item.id)}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{parseFloat(item.amount).toFixed(6)}</td>
            <td>{item.date}</td>
            <td>
              <span
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
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
