import styled from "styled-components";

export const Nav = styled.header`
  background: ${(props) => props.theme.colors.tertiary};
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  top: 0;
  position: sticky;
  width: 100%;
  z-index: 5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid #cc322b;
`;

export const NavLogo = styled.img`
  padding-left: ${(props) => props.theme.spacing.small};
  width: 45px;
  height: 45px;
`;
