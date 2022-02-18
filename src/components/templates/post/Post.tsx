import React from "react";
import PostContent from "../../molecules/postContent/PostContent";
import Related from "../../organisms/related/Related";
import { StyledPost } from "./Post.styles";

interface Props {
  content: string;
}
const Post = ({ content }: Props) => {
  return (
    <StyledPost>
      <PostContent content={content} />
      <Related />
    </StyledPost>
  );
};

export default Post;
