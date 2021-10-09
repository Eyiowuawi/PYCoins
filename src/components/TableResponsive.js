const TableResponsive = ({ data, onclick }) => {
  return (
    <div className="tableresponsive">
      {data?.map((item) => (
        <div
          key={item.id}
          className="tableresponsive_item"
          onClick={() => onclick(item.id)}
        >
          <p className="td name">{item.name}</p>
          <div className="tableresponsive_details">
            <p className="td"> {item.email} </p>
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
