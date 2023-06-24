import { Fragment } from "react";
import Home from "@/pages/home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/global";
import { theme } from "./themes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
export const App = () => {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Home />
        </ThemeProvider>
      </QueryClientProvider>
    </Fragment>
  );
};
