import Logo from "../assets/Logo.svg";
const Auth = ({ children }) => {
  return (
    <main className="auth">
      <div className="auth_container">
        <div className="auth_bgcolor"></div>
        <div className="auth_ext"></div>
        <div className="auth_content">
          <div className="auth_img">
            <img src={Logo} alt="payercoins" />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Auth;
