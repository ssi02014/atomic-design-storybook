import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Button from "../button/Button";

export default {
  title: "Atoms/Link",
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
Default.args = {};
