import { RouterProvider } from "react-router-dom";
import { NavigationScroll } from "@/common";
import router from "@/routes";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <NavigationScroll>
      <CssBaseline />
      <RouterProvider router={router} />
    </NavigationScroll>
  );
};

export default App;
