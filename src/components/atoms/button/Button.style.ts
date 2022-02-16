import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

interface ButtonTypes {
  variant: string;
}
interface Props {
  theme: Theme;
  variant: string;
}

const buttonBackground = ({ theme, variant }: Props) => {
  if (variant === "primary") return theme.colors.primary;
  return theme.colors.secondary;
};

export const StyledButton = styled.button<ButtonTypes>`
  padding: 16px;
  background-color: ${(props) => buttonBackground(props)};
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
`;

export const StyledLinkButton = styled(StyledButton)<ButtonTypes>`
  a {
    text-decoration: none;
    color: #fff;
  }
`;
