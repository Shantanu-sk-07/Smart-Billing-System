import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "../app/App";
import { StyledEngineProvider } from "@mui/material/styles";
import { ConfigProvider } from '../contexts';
import '@/i18n';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
       <StyledEngineProvider injectFirst> {/* Add this wrapper */}
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </StyledEngineProvider>
    </HashRouter>
  </React.StrictMode>
);