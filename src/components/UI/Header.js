import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";

import { AppContext } from "./../../context/index";

import Toggle from "./Switch";
import Arrowdropdown from "./Arrowdropdown";

import { Arrow } from "../../icons";

import { updateEnvironment } from "../../services/crypto";

import Hamburger from "../../assets/hamburger.svg";
import Logo from "../../assets/Logo.svg";
import { toast } from "react-toastify";

const Header = ({ showsidebar, dropdown, close }) => {
  const { fullname, initials, environment } = useContext(AppContext);

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    "updateenvironment",
    (data) => updateEnvironment(data),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("getuserenvironment");
        queryClient.invalidateQueries("getusercrypto");
        queryClient.invalidateQueries("getpaymentlinks");
        toast.success(`Switched Integration: ${data}`);
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
          <p
            className={`${
              environment === "sandbox" && "header_live"
            } header-text`}
          >
            Test
          </p>
          {environment && (
            <Toggle
              checked={environment === "sandbox" ? false : true}
              param={environment === "sandbox" ? "live" : "sandbox"}
              toggle={toggleEnvironment}
              disabled={isLoading}
            />
          )}
          <p
            className={`${environment === "live" && "header_live"} header-text`}
          >
            Live
          </p>
          {fullname && (
            <>
              <div className="header_name">{`${initials}`}</div>
              <p className="header-text header-text-black">{`${fullname}`}</p>
            </>
          )}
        </div>

        <div className="header_mobile">
          <img onClick={showsidebar} src={Hamburger} alt="sidebar" />
          <div className="header_logo">
            <img src={Logo} alt="Payercoins Logo" />
          </div>
          <div className="header_name_container">
            {fullname && <div className="header_name">{`${initials}`}</div>}
            <div className="header_mobile_arrow">
              <div onClick={close}>
                <Arrow />
              </div>
              {dropdown && (
                <Arrowdropdown
                  checked={environment === "sandbox" ? false : true}
                  param={environment === "sandbox" ? "live" : "sandbox"}
                  toggle={toggleEnvironment}
                  disabled={isLoading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
