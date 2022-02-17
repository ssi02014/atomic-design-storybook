import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Header from "./Header";

export default {
  title: "Organisms/Header",
  component: Header,
};

const Template: Story = ({ navigation }) => {
  return <Header navigation={navigation} />;
};

export const Default = Template.bind({});
Default.args = {
  navigation: [
    {
      title: "general",
      items: [
        {
          icon: null,
          title: "Shop",
          url: "#",
        },
        {
          icon: null,
          title: "About Elements",
          url: "#",
        },
        {
          icon: null,
          title: "FAQ",
          url: "#",
        },
        {
          icon: null,
          title: "Contact",
          url: "#",
        },
      ],
    },
    {
      title: "account",
      items: [
        {
          icon: null,
          title: "Insights",
          url: "#",
        },
        {
          icon: null,
          title: "Account",
          url: "#",
        },
        {
          icon: "user",
          title: "User",
          url: "#",
        },
        {
          icon: "bag",
          title: "Cart",
          url: "#",
        },
      ],
    },
  ],
};
