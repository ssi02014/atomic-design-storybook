import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Example from "../components/Example";

export default {
  title: "Components/Button",
  component: Example,
};

const Template: Story = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export const Default = Template.bind({});
