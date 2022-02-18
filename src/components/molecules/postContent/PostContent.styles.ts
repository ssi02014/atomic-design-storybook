import styled from "@emotion/styled";

export const StylePostContent = styled.article`
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;

  p + p {
    margin-top: 15px;
  }
`;
