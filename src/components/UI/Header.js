import { Arrow } from "../../icons";
import Logo from "../../assets/Logo.svg";
import Hamburger from "../../assets/hamburger.svg";
import Toggle from "./Switch";
import Arrowdropdown from "./Arrowdropdown";
import { useContext, useMemo, useEffect } from "react";
import { AppContext } from "./../../context/index";
import { updateEnvironment } from "../../services/crypto";
import { useMutation, useQueryClient } from "react-query";
const Header = ({ showsidebar }) => {
  const { fullname, initials, environment, saveUserEnvironment } =
    useContext(AppContext);

  const queryClient = useQueryClient();
  const { data, isLoading, mutate } = useMutation(
    "updateenvironment",
    (data) => updateEnvironment(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getuserenvironment");
        queryClient.invalidateQueries("getusercrypto");
        queryClient.invalidateQueries("getpaymentlinks");
      },
    }
  );

  const toggleEnvironment = (data) => {
    mutate({ environment: data });
  };
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_desktop">
          <p className="header-text header-text-grey">Test</p>
          {environment && (
            <Toggle
              checked={environment === "sandbox" ? false : true}
              param={environment === "sandbox" ? "live" : "sandbox"}
              toggle={toggleEnvironment}
              disabled={isLoading}
            />
          )}
          <p className="header-text header-text-grey">Live</p>
          {fullname && (
            <>
              <div className="header_name">{`${initials}`}</div>
              <p className="header-text header-text-black">{`${fullname}`}</p>
            </>
          )}

          <Arrowdropdown />
        </div>

        <div className="header_mobile">
          <img onClick={showsidebar} src={Hamburger} />
          <div className="header_logo">
            <img src={Logo} alt="Payercoins Logo" />
          </div>
          <div className="header_name_container">
            <div className="header_name">JD</div>
            <div className="header_mobile_arrow">
              <Arrowdropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
