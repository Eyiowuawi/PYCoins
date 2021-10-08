import { lazy } from "react";
// Protected Route HOC
import WithProtectedRoute from "./hoc/withProtectedRoutes";

// Layouts
import AuthLayout from "./layout/Auth";
import DashboardLayout from "./layout/Dashboard";

// Auth Components
const Login = lazy(() => import("./pages/Auth/Login"));
const Create = lazy(() => import("./pages/Auth/Create"));
const PersonalForm = lazy(() => import("./pages/Auth/PersonalForm"));
const BusinessForm = lazy(() => import("./pages/Auth/BusinessForm"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const Verification = lazy(() => import("./pages/Auth/Verification"));

// Dashboard Components
const Home = lazy(() => import("./pages/Dashboard/Home"));
const Payment = lazy(() => import("./pages/Dashboard/Payment"));
const Wallet = lazy(() => import("./pages/Dashboard/Wallet"));
const CryptoDetails = lazy(() => import("./pages/Dashboard/CryptoDetails"));
const PaymentDetails = lazy(() => import("./pages/Dashboard/PaymentDetails"));
const Settings = lazy(() => import("./pages/Dashboard/Settings"));

const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const NotFound = lazy(() => import("./components/UI/404"));

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
