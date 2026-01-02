import { lazy } from "react";
import Loadable from "@/common/Loadable";
import { RoutePaths } from "@/constants/RoutePaths";

const LoginMobile = Loadable(lazy(() => import("@/views/auth/LoginMobile")));
const ForgotPassword = Loadable(lazy(() => import("@/views/auth/ForgotPassword")));

const MainRoutes = {
  path: "/",
  children: [
    {
      path: RoutePaths.Login,
      element: <LoginMobile />
    },
    {
      path: RoutePaths.ForgotPassword,
      element: <ForgotPassword />
    },
   
  ]
};

export default MainRoutes;
