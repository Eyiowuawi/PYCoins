import Logo from "../../assets/Logo.svg";
import Navigation from "./Navigation/Nav";

import { Logout } from "../../icons";
import { Link, withRouter } from "react-router-dom";
import { useMutation, QueryClient } from "react-query";
import { logout } from "./../../services/auth";
import { AppContext } from "./../../context/index";
import { useContext } from "react";

const Sidebar = ({ show, close, history }) => {
  const { logoutUser } = useContext(AppContext);
  const queryClient = new QueryClient();
  const { isSuccess, mutate, isLoading } = useMutation(() => logout(history), {
    mutationKey: "logout",
    onSuccess: () => {
      queryClient.removeQueries("getuserprofile", { exact: true });
      logoutUser();
    },
  });
  return (
    <div className={`sidebar ${show && "sidebar_show"}`}>
      <div className="sidebar_container">
        <Link to="/">
          <img src={Logo} alt="Payercoins Logo" />
        </Link>
        <div className="sidebar_name">
          <h5>Business Name</h5>
          <p>ID: 10123856</p>
        </div>
        <Navigation close={close} />
        <button className="sidebar_footer" onClick={mutate}>
          <Logout />
          <p className="nav-text">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
