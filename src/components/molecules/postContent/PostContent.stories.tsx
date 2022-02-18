import React from "react";
import { Story } from "@storybook/react/types-6-0";
import PostContent from "./PostContent";

export default {
  title: "Molecules/PostContent",
  component: PostContent,
};

const Template: Story = ({ content }) => {
  return <PostContent content={content} />;
};

export const Default = Template.bind({});
Default.args = {
  content: "Hello World",
};
