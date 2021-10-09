import Logo from "../../assets/Logo.svg";
import Navigation from "./Navigation/Nav";

import { Logout } from "../../icons";
import { Link, withRouter } from "react-router-dom";
import { useMutation, QueryClient } from "react-query";
import { logout } from "./../../services/auth";
import { AppContext } from "./../../context/index";
import { useContext, useMemo } from "react";

const Sidebar = ({ show, close, history }) => {
  const { logoutUser, profile } = useContext(AppContext);
  const queryClient = new QueryClient();
  const { isSuccess, mutate, isLoading } = useMutation(() => logout(history), {
    mutationKey: "logout",
    onSuccess: () => {
      queryClient.removeQueries("getuserprofile", { exact: true });
      logoutUser();
    },
  });

  const detail = useMemo(() => {
    const data = {
      name:
        profile?.user?.userType === "individual"
          ? `${profile?.user?.firstName} ${profile?.user?.lastName}`
          : `${profile?.business?.lastName}`,

      id:
        profile?.user?.userType === "individual"
          ? `${profile?.user?._id}`
          : `${profile?.business?._id}`,
    };
    return data;
  }, [profile]);
  console.log(profile);
  return (
    <div className={`sidebar ${show && "sidebar_show"}`}>
      <div className="sidebar_container">
        <Link to="/">
          <img src={Logo} alt="Payercoins Logo" />
        </Link>
        <div className="sidebar_name">
          {profile && (
            <>
              <h5>{detail.name}</h5>
              <p>ID: {detail.id}</p>
            </>
          )}
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
