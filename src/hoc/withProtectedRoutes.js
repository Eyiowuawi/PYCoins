import { createAutoLogout } from "../utils/createAutoLogout";
import { Redirect } from "react-router-dom";
const WithProtectedRoute = (Component) => (props) => {
  const isValid = createAutoLogout();
  if (!isValid) {
    return <Redirect to="/auth/login" />;
  } else {
    return <Component {...props} />;
  }
};

export default WithProtectedRoute;
