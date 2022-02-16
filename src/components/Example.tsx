import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Button = styled.button`
  background-color: red;
  color: #fff;
  border: none;
`;
const Example = () => {
  return (
    <div>
      <Button>예제</Button>
      <Link to="/hi">안녕</Link>
    </div>
  );
};

export default Example;
