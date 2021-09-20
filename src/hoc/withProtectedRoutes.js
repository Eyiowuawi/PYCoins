import { createAutoLogout } from "../utils/createautologout";
import { Redirect } from "react-router-dom";
const WithProtectedRoute = (Component) => (props) => {
  const isValid = createAutoLogout();
  console.log(isValid);
  if (!isValid) {
    return <Redirect to="/auth/login" />;
  } else {
    return <Component {...props} />;
  }
};

export default WithProtectedRoute;
