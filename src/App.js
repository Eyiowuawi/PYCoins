import { Switch, Route } from "react-router-dom";
import AuthLayout from "./layout/Auth";
import Create from "./pages/Auth/Create";
import PersonalForm from "./pages/Auth/PersonalForm";
import BusinessForm from "./pages/Auth/BusinessForm";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

function App() {
  return (
    <div>
      <AuthLayout>
        <Switch>
          <Route path="/" exact component={Create} />
          <Route path="/register/business" component={BusinessForm} />
          <Route path="/register/personal" component={PersonalForm} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
        </Switch>
      </AuthLayout>
    </div>
  );
}

export default App;
