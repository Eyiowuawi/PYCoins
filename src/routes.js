// Protected Route HOC
import WithProtectedRoute from "./hoc/withProtectedRoutes";

// Layouts
import AuthLayout from "./layout/Auth";
import DashboardLayout from "./layout/Dashboard";



// Auth Components
import Create from "./pages/Auth/Create";
import PersonalForm from "./pages/Auth/PersonalForm";
import BusinessForm from "./pages/Auth/BusinessForm";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Verification from "./pages/Auth/Verification";

// Dashboard components
import Home from "./pages/Dashboard/Home";
import Payment from "./pages/Dashboard/Payment";
import Wallet from "./pages/Dashboard/Wallet";
import Settings from "./pages/Dashboard/Settings";
import CryptoDetails from "./pages/Dashboard/CryptoDetails";
import PaymentDetails from "./pages/Dashboard/PaymentDetails";

import PaymentPage from "./pages/PaymentPage";

import NotFound from "./components/UI/404";

const routes = [
  {
    path: "/pay/:slug",
    exact: true,
    component: PaymentPage,
    key: "payment-page",
  },
  {
    path: "/pageNotFound",
    component: NotFound,
    exact: true,
  },

  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      {
        path: "/auth",
        exact: true,
        component: Create,
        key: "create-initial",
      },
      {
        path: "/auth/create",
        exact: true,
        component: Create,
        key: "create-page",
      },
      {
        path: "/auth/register/business",
        exact: true,
        component: BusinessForm,
        key: "register-business",
      },
      {
        path: "/auth/register/personal",
        exact: true,
        component: PersonalForm,
        key: "register-personal",
      },
      { path: "/auth/login", exact: true, component: Login, key: "login" },
      {
        path: "/auth/forgotpassword",
        exact: true,
        component: ForgotPassword,
        key: "forgot-password",
      },
      {
        path: "/auth/reset/resetPassword/",
        exact: true,
        component: ResetPassword,
        key: "reset-password",
      },
      {
        path: "/auth/email/verify",
        exact: true,
        component: Verification,
        key: "verification",
      },
    ],
  },
  {
    path: "/",
    component: WithProtectedRoute(DashboardLayout),
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
        key: "dashboard-initial",
      },
      {
        path: "/",
        exact: true,
        component: Home,
        key: "dashboard-page",
      },
      {
        path: "/wallet",
        exact: true,
        component: Wallet,
        key: "wallet",
      },
      {
        path: "/wallet/:currency",
        exact: true,
        component: CryptoDetails,
        key: "crypto-details",
      },
      {
        path: "/payment/pay",
        exact: true,
        component: Payment,
        key: "payment-pay",
      },
      {
        path: "/payment/pay/:slug/:id",
        exact: true,
        component: PaymentDetails,
        key: "payment-pay",
      },
      {
        path: "/settings",
        exact: true,
        component: Settings,
        key: "settings",
      },
    ],
  },
];

export default routes;
