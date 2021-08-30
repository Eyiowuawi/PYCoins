import { useContext } from "react";
import { AppContext } from "./../../context/index";
const User = ({ date }) => {
  const { fullname } = useContext(AppContext);
  return (
    <div className="home_name">
      <h3 className="title title-black">Hello, {fullname} 👋</h3>
      <p className="title title-grey">{date}</p>
    </div>
  );
};
export default User;
