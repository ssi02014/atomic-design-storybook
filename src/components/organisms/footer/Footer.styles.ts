import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.black};
  color: #fff;
  .footer-contents {
    display: flex;
  }
  .footer-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;
