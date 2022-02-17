import styled from "@emotion/styled";

interface Navigation {
  direction: any;
}
export const StyledNavigation = styled.div<Navigation>`
  padding: 16px;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction !== "horizontal" ? "column" : "row"};

  a {
    text-decoration: none;
    color: #111;
  }
  // a + b는 a요소를 따르는 b요소를 선택
  // a ~ F는 a요소가 존재하면 b를 선택
  a + a {
    margin-left: ${({ direction }) => direction === "horizontal" && "24px"};
    margin-top: ${({ direction }) => direction !== "horizontal" && "24px"};
  }
`;
