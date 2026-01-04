import React from "react";
import ReactDOM from "react-dom/client";
import App from "../app/App";
import { StyledEngineProvider } from "@mui/material/styles";
import { ConfigProvider } from '../contexts';
import '@/i18n';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
       <StyledEngineProvider injectFirst> 
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);