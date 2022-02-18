import Parser from "html-react-parser";

const config = {};

const parserHTML = (html: string) => {
  const clean = Parser(html, config);
  return clean;
};

export default parserHTML;
