import React from "react";
import { StyledNavigation } from "./Navigation.style";

interface Items {
  title: string;
  url: string;
}

interface Props {
  direction: string;
  items: Items[];
}

const Navigation = ({ direction, items = [] }: Props) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map((item, idx) => (
        <a key={idx} href={item.url}>
          {item.title}
        </a>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
