import React from "react";
import { Global, css } from "@emotion/react";
import theme from "./theme";

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.primary};
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <Global styles={reset}></Global>
    </>
  );
};

export default GlobalStyles;
