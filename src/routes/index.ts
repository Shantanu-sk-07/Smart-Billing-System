import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";

// BrowserRouter version (clean URL)
const router = createBrowserRouter([
  AuthenticationRoutes,
  MainRoutes
]);

export default router;
