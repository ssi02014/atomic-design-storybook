import React from "react";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";
import Related from "../../organisms/related/Related";
import { StyledPost } from "./Post.styles";

const Post = () => {
  const navigation = [
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
  ];
  const menus = [
    {
      title: "Menu1",
      items: [{ title: "Home", url: "/" }],
    },
    {
      title: "Menu2",
      items: [{ title: "About us", url: "/about" }],
    },
    {
      title: "Menu3",
      items: [{ title: "Contact", url: "/contact" }],
    },
  ];

  return (
    <StyledPost>
      <Header navigation={navigation}></Header>
      <Related />
      <Footer menus={menus} />
    </StyledPost>
  );
};

export default Post;
