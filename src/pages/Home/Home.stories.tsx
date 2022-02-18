import React from "react";
import { Story } from "@storybook/react/types-6-0";
import HomePage from ".";

export default {
  title: "Pages/Home",
  component: HomePage,
};

const Template: Story = () => {
  return <HomePage />;
};

export const Default = Template.bind({});
Default.args = {};
