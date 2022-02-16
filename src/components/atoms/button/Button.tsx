import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { StyledButton, StyledLinkButton } from "./Button.style";
import { ReactComponent as IconPlus } from "../../../assets/images/plus.svg";
import { ReactComponent as IconBag } from "../../../assets/images/shopping-bag.svg";
import { ReactComponent as IconCart } from "../../../assets/images/shopping-cart.svg";
import { ReactComponent as IconUser } from "../../../assets/images/user.svg";
import { ReactComponent as IconCancel } from "../../../assets/images/x.svg";

interface Icons {
  plus: React.ReactNode;
  bag: React.ReactNode;
  cart: React.ReactNode;
  user: React.ReactNode;
  cancel: React.ReactNode;
  [propsName: string]: React.ReactNode;
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  href?: string;
  icon?: string;
  onClick: () => void;
}

interface ButtonIconProps {
  name: string;
  icons: Icons;
}

const Button = ({
  children,
  href,
  variant = "primary",
  icon,
  onClick,
}: ButtonProps) => {
  const theme = useTheme();
  const icons: Icons = {
    plus: <IconPlus />,
    bag: <IconBag />,
    cart: <IconCart />,
    user: <IconUser />,
    cancel: <IconCancel />,
  };

  console.log(theme);
  console.log(icons);
  return (
    <>
      {href ? (
        <StyledLinkButton variant={variant}>
          {icon && <ButtonIcon name={icon} icons={icons} />}
          <Link to={href}>링크</Link>
        </StyledLinkButton>
      ) : (
        <StyledButton variant={variant} onClick={onClick}>
          {icon && <ButtonIcon name={icon} icons={icons} />}
          {children}
        </StyledButton>
      )}
    </>
  );
};

const ButtonIcon = ({ name, icons }: ButtonIconProps) => {
  const Icon = useMemo(() => {
    if (!icons[name]) return null;
    return icons[name];
  }, [name, icons]);

  return <span>{Icon}</span>;
};

export default Button;
