import React from "react";
import { Global, css } from "@emotion/react";

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
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
