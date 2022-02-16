import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../src/components/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/components/GlobalStyles/theme";

export const decorators = [
  (Story) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    );
  },
];
