import Logo from "../assets/Logo.svg";
import Background from "../components/UI/Background";
import { renderRoutes } from 'react-router-config';
const Auth = ({ route }) => {
  return (
    <div className="auth">
      <Background>
        <div className="background_img">
          <img src={Logo} alt="payercoins" />
        </div>
        {renderRoutes(route.routes)}
      </Background>
    </div>
  );
};

export default Auth;
