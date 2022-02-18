import { useTheme } from "@emotion/react";
import React from "react";
import Navigation, { Items } from "../../molecules/navigation/Navigation";
import { StyledFooter } from "./Footer.styles";

interface Menu {
  items: Items[];
  title: string;
}
interface Props {
  menus: Menu[];
}
const Footer = ({ menus = [] }: Props) => {
  const theme = useTheme();
  return (
    <StyledFooter theme={theme}>
      <div className="footer-wrapper">
        <nav className="footer-contents">
          {menus.map(({ title, items }) => (
            <div
              className="footer-navigation"
              key={`footer-navigation-${title}`}
            >
              {title && <h3 className="footer-title">{title}</h3>}
              <Navigation direction="vertical" items={items} />
            </div>
          ))}
        </nav>
        <div className="footer-newsletter">
          <h4>Join our newsletter</h4>
          <p>We will send you updates on new products and discounts</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          Copyright &copy; Minjae{" "}
          <span>{new Date().getFullYear().toString()}</span>
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
