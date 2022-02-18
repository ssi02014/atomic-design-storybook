import React from "react";
import parserHTML from "../../../particles/parserHTML";
import { StylePostContent } from "./PostContent.styles";

interface Props {
  content: string;
}
const PostContent = ({ content }: Props) => {
  return <StylePostContent>{parserHTML(content)}</StylePostContent>;
};

export default PostContent;
