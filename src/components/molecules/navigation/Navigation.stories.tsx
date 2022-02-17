import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Navigation from "./Navigation";

export default {
  title: "Molecules/Navigation",
  component: Navigation,
};

const Template: Story = ({ data }) => {
  return <Navigation direction={data.direction} items={data.items} />;
};

export const Default = Template.bind({});
Default.args = {
  data: {
    direction: "horizontal",
    items: [
      { title: "Home", url: "/" },
      { title: "About us", url: "/about" },
      { title: "Contact", url: "/contact" },
    ],
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  data: {
    direction: "vertical",
    items: [
      { title: "Home", url: "/" },
      { title: "About us", url: "/about" },
      { title: "Contact", url: "/contact" },
    ],
  },
};
