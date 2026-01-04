import { createHashRouter } from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes";
// import MainRoutes from "./MainRoutes";

const router = createHashRouter([
  AuthenticationRoutes,
  // MainRoutes
]);

export default router;
