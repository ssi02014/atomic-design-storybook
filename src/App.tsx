import React from "react";
import { ThemeProvider } from "@emotion/react";
import Button from "./components/atoms/button/Button";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./components/GlobalStyles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <Button onClick={() => {}}>예제</Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
