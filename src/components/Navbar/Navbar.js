import React from "react";
import { Nav, NavLogo } from "./styled";
import { Button } from "../styles/Button";
import vinyl from "../../assets/vinyl.png";

export default function Navbar() {
  return (
    <Nav>
      <NavLogo src={vinyl} alt="" />
      <Button>Buy Me</Button>
    </Nav>
  );
}
