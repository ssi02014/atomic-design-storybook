import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <StyledButton>{children}</StyledButton>
      <ThemeButton>{children}</ThemeButton>
    </>
  );
};

const StyledButton = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ThemeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default Button;
