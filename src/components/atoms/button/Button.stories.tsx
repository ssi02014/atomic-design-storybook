import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: Story = () => {
  return (
    <div>
      <Button>예제입니다.</Button>
    </div>
  );
};

export const Default = Template.bind({});
