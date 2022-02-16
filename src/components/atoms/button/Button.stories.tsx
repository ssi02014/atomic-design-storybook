import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: Story = ({ onClick, href, variant, icon }) => {
  return (
    <div>
      <Button icon={icon} href={href} onClick={onClick} variant={variant}>
        예제입니다.
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    console.log("hello");
  },
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  href: "/router",
  variant: "secondary",
  icon: "plus",
  onClick: () => {
    console.log("hello");
  },
};

export const CartButton = Template.bind({});
CartButton.args = {
  variant: "primary",
  icon: "cart",
  onClick: () => {
    console.log("hello");
  },
};
