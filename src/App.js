import { Switch, Route } from "react-router-dom";
import AuthLayout from "./layout/Auth";
import DashboardLayout from "./layout/Dashboard";

// Auth Components
import Create from "./pages/Auth/Create";
import PersonalForm from "./pages/Auth/PersonalForm";
import BusinessForm from "./pages/Auth/BusinessForm";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

// Dashboard components
import Home from "./pages/Dashboard/Home";
import Payment from "./pages/Dashboard/Payment";
import Wallet from "./pages/Dashboard/Wallet";
import Settings from "./pages/Dashboard/Settings";

function App() {
  return (
    <div>
      {/* <AuthLayout>
        <Switch>
          <Route path="/" exact component={Create} />
          <Route path="/register/business" component={BusinessForm} />
          <Route path="/register/personal" component={PersonalForm} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
        </Switch>
      </AuthLayout> */}

      <DashboardLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/wallet" exact component={Wallet} />
          <Route path="/payment/pay" exact component={Payment} />
          <Route path="/settings" exact component={Settings} />
        </Switch>
      </DashboardLayout>
    </div>
  );
}

export default App;
