import React from "react";
import { ThemeProvider } from "@emotion/react";
import Button from "./components/atoms/button/Button";
import GlobalStyles from "./components/GlobalStyles";

const theme = {
  colors: {
    primary: "rebeccapurple",
  },
};

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button>예제</Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
