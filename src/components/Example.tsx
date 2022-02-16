import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Button = styled.button`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  font-weight: 700;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
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
