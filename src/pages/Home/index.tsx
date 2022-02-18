import React from "react";
import Footer from "../../components/organisms/footer/Footer";
import Header from "../../components/organisms/header/Header";
import Post from "../../components/templates/post/Post";

const HomePage = () => {
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

  const content = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt dui id quam tincidunt, id lobortis tellus eleifend. Suspendisse ipsum turpis, ullamcorper sed hendrerit in, pellentesque at tortor. Fusce id diam ut massa tempor vehicula. Aliquam nec purus id massa congue euismod id id eros. Nam eget hendrerit mauris. Cras rhoncus, lorem eget lobortis fringilla, neque felis sollicitudin odio, at vehicula nisi magna eu purus. Aenean eget bibendum nunc.</p>
  <p>Nulla et tellus nec risus molestie molestie. Donec in posuere ex, quis venenatis quam. Suspendisse aliquam dui iaculis velit hendrerit, eu viverra ante sagittis. Sed eget nibh eu arcu egestas sagittis. Sed laoreet velit eget semper consequat. Pellentesque mollis turpis et quam mollis, ut volutpat orci scelerisque. In nec massa eget eros consequat vulputate non in ante. Nulla ullamcorper diam pharetra massa tempor congue. Suspendisse dignissim nunc a tellus scelerisque, et luctus est lacinia. Aliquam non diam ut neque blandit posuere. Ut tempor feugiat turpis, sed eleifend ipsum tristique quis. Sed vitae sem malesuada, gravida felis vitae, porttitor justo. Nam ut est quis lacus bibendum dapibus vel at urna.</p>
  <p>Aenean suscipit malesuada urna sit amet pretium. Quisque blandit nibh nisl, non molestie leo volutpat id. Donec ante ex, vehicula ac nunc quis, malesuada ultrices dui. Duis a risus metus. Donec massa ante, venenatis eget felis eget, lobortis semper sapien. Mauris in ullamcorper sapien. Maecenas sollicitudin semper odio et suscipit. Nulla facilisi. Vestibulum iaculis ultrices neque, id hendrerit mauris ornare sit amet. </p>
  <p>Vestibulum imperdiet sem sed purus auctor porttitor. Aliquam sagittis orci sit amet risus suscipit ornare. Vivamus tristique tincidunt ultrices. Curabitur at ex bibendum, aliquam eros sit amet, blandit quam. Donec ac finibus ante, eget hendrerit ipsum. Ut pretium posuere urna, vel varius orci molestie vel. Maecenas at ultrices nibh. Phasellus tristique velit sed volutpat porttitor. Maecenas viverra ac lorem sit amet lobortis. Morbi pharetra libero metus, in malesuada neque finibus a. Curabitur facilisis tristique quam non molestie. Donec convallis quam sit amet sodales congue. In hac habitasse platea dictumst. Nam placerat accumsan diam, ut interdum sem finibus id. Mauris sed ex tincidunt, ultricies ex et, convallis lorem. Aliquam malesuada odio id purus lacinia, eget dapibus tortor tincidunt. </p>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin non leo auctor, laoreet justo at, varius velit. Fusce commodo purus lectus, sit amet sollicitudin risus euismod in. Cras gravida velit in erat blandit ullamcorper. Suspendisse aliquam dapibus accumsan. Nunc tincidunt eget lectus nec porta. Vivamus sed ante eros. Nullam et justo turpis. Maecenas gravida, orci vel accumsan elementum, elit nisi pulvinar dolor, quis placerat est turpis in augue. Suspendisse molestie placerat porttitor. Vivamus rutrum ligula in feugiat imperdiet. </p>
`;
  return (
    <>
      <Header navigation={navigation} />
      <Post content={content} />
      <Footer menus={menus} />
    </>
  );
};

export default HomePage;
