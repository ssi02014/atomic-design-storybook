import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../src/components/GlobalStyles";

export const decorators = [
  (Story) => {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Story />
      </BrowserRouter>
    );
  },
];
