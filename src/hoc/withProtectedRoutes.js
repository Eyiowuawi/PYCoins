import { createAutoLogout } from "../utils/createautologout";
import { Redirect } from "react-router-dom";
const WithProtectedRoute = (Component) => (props) => {
  const isValid = createAutoLogout();
  if (!isValid) {
    return <Redirect to="/auth/login" />;
  }

  return <Component {...props} />;
};

export default WithProtectedRoute;
