import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./components/GlobalStyles/theme";
import Router from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
}
export default App;
