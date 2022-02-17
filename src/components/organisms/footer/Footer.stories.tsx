import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Footer from "./Footer";

export default {
  title: "Organisms/Footer",
  component: Footer,
};

const Template: Story = ({ menus }) => {
  return <Footer menus={menus} />;
};

export const Default = Template.bind({});
Default.args = {
  menus: [
    {
      title: "Menu1",
      items: [{ title: "Home", url: "/" }],
    },
    {
      title: "Menu2",
      items: [{ title: "About us", url: "/about" }],
    },
    {
      title: "Menu3",
      items: [{ title: "Contact", url: "/contact" }],
    },
  ],
};
