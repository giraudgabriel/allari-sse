import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Home from "@/pages/home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/global";
import { theme } from "./themes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Home />
        </ThemeProvider>
      </QueryClientProvider>
    </Fragment>
  </React.StrictMode>
);
