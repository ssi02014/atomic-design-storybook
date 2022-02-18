import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Post from "./Post";

export default {
  title: "Template/Post",
  component: Post,
};

const Template: Story = () => {
  return <Post />;
};

export const Default = Template.bind({});
Default.args = {};
