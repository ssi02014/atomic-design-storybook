import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default Button;
