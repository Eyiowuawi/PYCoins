import Logo from "../assets/Logo.svg";
import Background from "../components/UI/Background";
import { renderRoutes, matchRoutes } from "react-router-config";
const Auth = ({ route, history, location }) => {
  const branch = matchRoutes(route.routes, location.pathname);
  if (branch.length < 1) history.push("/pageNotFound");
  return (
    <div className="auth">
      <Background>
        <div className="auth_img">
          <img src={Logo} alt="payercoins" />
        </div>

        {renderRoutes(route.routes)}
      </Background>
    </div>
  );
};

export default Auth;
