import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

interface ButtonTypes {
  variant: string;
  theme: Theme;
}

export const StyledButton = styled.button<ButtonTypes>`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme, variant }) => theme.colors[variant]};
  color: #fff;
  border: none;
  font-weight: 700;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0);

  span {
    margin-right: 5px;
  }
`;

export const StyledLinkButton = styled(StyledButton)<ButtonTypes>`
  a {
    text-decoration: none;
    color: #fff;
  }
`;
