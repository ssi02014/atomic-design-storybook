import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Related from "./Related";

export default {
  title: "Organisms/Related",
  component: Related,
};

const Template: Story = () => {
  return <Related />;
};

export const Default = Template.bind({});
Default.args = {};
