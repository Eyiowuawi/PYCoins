import Logo from "../assets/Logo.svg";
import Background from "../components/UI/Background";
const Auth = ({ children }) => {
  return (
    <div className="auth">
      <Background>
        <div className="background_img">
          <img src={Logo} alt="payercoins" />
        </div>
        {children}
      </Background>
    </div>
  );
};

export default Auth;
