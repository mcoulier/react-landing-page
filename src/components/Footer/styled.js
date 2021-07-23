import styled from "styled-components";

export const StyledFooter = styled.footer`
  bottom: 0;
  background: ${(props) => props.theme.colors.tertiary};
  height: 35px;
  border-top: 2px solid #c35353;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Terms = styled.div`
  font-size: 12px;
`;
