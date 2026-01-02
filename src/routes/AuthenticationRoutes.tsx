import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Loadable from "@/common/Loadable";

// Layouts
import WebsiteLayout from "@/layout/WebsiteLayout";
import DashboardLayout from "@/layout/DashboardLayout";


// ---------- Website Pages ----------
const LandingPage = Loadable(lazy(() => import("@/views/home/LandingPage")));
const Privacy = Loadable(lazy(() => import("@/views/home/Privacy")));
const Terms = Loadable(lazy(() => import("@/views/home/TermsPage")));
const Features = Loadable(lazy(() => import("@/views/home/Features")));
const Pricing = Loadable(lazy(() => import("@/views/home/Pricing")));
const About = Loadable(lazy(() => import("@/views/home/About")));

// ---------- Auth Pages ----------
const LoginMobile = Loadable(lazy(() => import("@/views/auth/LoginMobile")));
const Register = Loadable(lazy(() => import("@/views/auth/Register")));
const VerifyOtp = Loadable(lazy(() => import("@/views/auth/ForgotPassword")));

// ---------- Dashboard Pages ----------
const DashboardHome = Loadable(lazy(() => import("@/views/dashboard/DashboardHome")));
const Invoices = Loadable(lazy(() => import("@/views/dashboard/Invoices")));
const SalesBilling = Loadable(lazy(() => import("@/views/dashboard/SalesBilling")));
const Customers = Loadable(lazy(() => import("@/views/dashboard/Customers")));
const Inventory = Loadable(lazy(() => import("@/views/dashboard/Inventory")));
const Reports = Loadable(lazy(() => import("@/views/dashboard/Reports")));
const Settings = Loadable(lazy(() => import("@/views/dashboard/Settings")));

const AuthenticationRoutes = {
  path: "/",
  element: <Outlet />,

  children: [
    /* ================= WEBSITE (PUBLIC) ================= */
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "features", element: <Features /> },
        { path: "pricing", element: <Pricing /> },
        { path: "about", element: <About /> },
         { path: "privacy", element: <Privacy/> },
          { path: "terms", element: <Terms /> },
      ],
    },

    /* ================= AUTH (NO LAYOUT) ================= */
    { path: "/login", element: <LoginMobile /> },
    { path: "/signup", element: <Register /> },
    { path: "/forgotpassword", element: <VerifyOtp /> },

    /* ================= DASHBOARD ================= */
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <DashboardHome /> },
        { path: "invoices", element: <Invoices /> },
        { path: "sales", element: <SalesBilling /> },
        { path: "customers", element: <Customers /> },
        { path: "inventory", element: <Inventory /> },
        { path: "reports", element: <Reports /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ],
};

export default AuthenticationRoutes;
