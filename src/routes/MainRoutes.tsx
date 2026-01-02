import { lazy } from "react";
import Loadable from "../common/Loadable";

const Sample = Loadable(lazy(() => import('../views/Sample')));
const Login = Loadable(lazy(() => import('../views/auth/Login')));
const SignPage = Loadable(lazy(() => import('../views/auth/Signup')));


const MainRoutes = {
  path: '/',
  children: [
    {
      path: 'default',
      element: <Sample />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <SignPage />
    },
  ]
};


export default MainRoutes;
