import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: Story = ({ onClick, href, variant }) => {
  return (
    <div>
      <Button href={href} onClick={onClick} variant={variant}>
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
  onClick: () => {
    console.log("hello");
  },
};
