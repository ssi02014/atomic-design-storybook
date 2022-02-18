import { useTheme } from "@emotion/react";
import React from "react";
import { StyledRelated } from "./Related.styles";

const Related = () => {
  const theme = useTheme();
  return <StyledRelated theme={theme}></StyledRelated>;
};

export default Related;
