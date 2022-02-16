import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { StyledButton, StyledLinkButton } from "./Button.style";

interface Props {
  children: React.ReactNode;
  variant?: string;
  href?: string;
  onClick: () => void;
}

const Button = ({ children, href, variant = "primary", onClick }: Props) => {
  const theme = useTheme();

  console.log(variant);
  return (
    <>
      {href ? (
        <StyledLinkButton variant={variant}>
          <Link to={href}>링크</Link>
        </StyledLinkButton>
      ) : (
        <StyledButton variant={variant} onClick={onClick}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
