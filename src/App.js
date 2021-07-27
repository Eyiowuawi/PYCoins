import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

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
import CryptoDetails from "./pages/Dashboard/CryptoDetails";

// Popup component
import Popup from "./pages/Popup";

function App() {
  const [showpopup, setShowPopup] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      // setShow(true);
      setShowPopup(true);
    }, 5000);
  }, []);

  if (
    pathname === "/login" ||
    pathname === "/register/business" ||
    pathname === "/register/personal" ||
    pathname === "/create" ||
    pathname === "/forgotpassword" ||
    pathname === "/resetpassword"
  ) {
    return (
      <AuthLayout>
        <Switch>
          <Route path="/create" exact component={Create} />
          <Route path="/register/business" component={BusinessForm} />
          <Route path="/register/personal" component={PersonalForm} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
        </Switch>
      </AuthLayout>
    );
  }
  return (
    <div>
      <DashboardLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/wallet" exact component={Wallet} />
          <Route path="/payment/pay" exact component={Payment} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/wallet/crypto" component={CryptoDetails} />
        </Switch>
        {/* {showpopup && <Popup closeModal={setShowPopup} />} */}
      </DashboardLayout>
    </div>
  );
}

export default App;
