import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

interface Props {
  children: React.ReactNode;
  href?: string;
  onClick: () => void;
}

const Button = ({ children, href, onClick }: Props) => {
  const theme = useTheme();

  return (
    <>
      {href ? (
        <Link to={href}>링크</Link>
      ) : (
        <StyledButton onClick={onClick}>{children}</StyledButton>
      )}
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
