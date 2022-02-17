import React, { useCallback, useState } from "react";
import Button from "../../atoms/button/Button";
import Navigation from "../../molecules/navigation/Navigation";
import { StyledHeader } from "./Header.styles";

interface Item {
  icon: null | string;
  title: string;
  url: string;
}
export interface INavigation {
  title: string;
  items: Item[];
}

interface Props {
  navigation: INavigation[];
}
const Header = ({ navigation }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <StyledHeader>
      <Button onClick={onToggle}>{isOpen ? "Hide" : "Show"} Menus</Button>
      {isOpen && (
        <div className="header-navigation">
          {navigation.length > 0 &&
            navigation.map(({ items, title }) => (
              <Navigation key={`header-menu-${title}`} items={items} />
            ))}
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
