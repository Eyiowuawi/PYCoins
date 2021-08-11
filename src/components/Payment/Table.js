import Actions from "../../assets/actions.svg";

const PaymentTable = ({ data, gotoDetails }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>PAGE NAME</th>
          <th>AMOUNT</th>
          <th>DATE</th>
          {/* <th>ACTION</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr onClick={() => gotoDetails(item.id)}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.date}</td>
      
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;
