const Table = ({ data, onclick, tableHead }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {/* <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Amount</th>
        <th>Status</th> */}
          {tableHead.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id} onClick={() => onclick(item.id)}>
            {item.name && <td>{item.name}</td>}
            {item.email && <td>{item.email}</td>}
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
