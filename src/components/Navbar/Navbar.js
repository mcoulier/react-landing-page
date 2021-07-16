import React from "react";
import { Nav, NavLogo, NavButton, NavTitle, NavItem } from "./styled";
import vinyl from "../../assets/vinyl.png";

export default function Navbar({ showBrand }) {
  return (
    <Nav>
      <NavItem>
        <NavLogo src={vinyl} alt="" />
      </NavItem>
      <NavItem>{showBrand ? "" : <NavTitle>Synth 70</NavTitle>}</NavItem>
      <NavItem>
        <NavButton>Buy Me</NavButton>
      </NavItem>
    </Nav>
  );
}
