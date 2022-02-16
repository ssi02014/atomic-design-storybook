import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: Story = ({ onClick, href }) => {
  return (
    <div>
      <Button href={href} onClick={onClick}>
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
  onClick: () => {
    console.log("hello");
  },
};
