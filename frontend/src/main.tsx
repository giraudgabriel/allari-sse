import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Home from "@/pages/home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/global";
import { theme } from "./themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </Fragment>
  </React.StrictMode>
);
