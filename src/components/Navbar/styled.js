import styled from "styled-components";
import { Button } from "../styles/Button";

export const Nav = styled.header`
  background: ${(props) => props.theme.colors.tertiary};
  height: 55px;
  display: flex;
  top: 0;
  position: sticky;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid #cc322b;
  padding-left: 5px;
  padding-right: 5px;
`;

export const NavItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLogo = styled.img`
  width: 45px;
  height: 45px;
  margin-right: auto;
`;

export const NavTitle = styled.h1`
  color: #cc322b;
  text-align: center;
  font-family: "Zen Tokyo Zoo", cursive;
`;

export const NavButton = styled(Button)`
  font-weight: bold;
  margin-left: auto;
`;
