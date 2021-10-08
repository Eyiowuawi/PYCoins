import empty from "../../assets/empty.svg";

const Empty = ({ children }) => {
  return (
    <div className="empty">
      {/* <img src={empty} alt="Empty State" /> */}
      {children}
    </div>
  );
};
export default Empty;
