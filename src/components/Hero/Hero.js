import React from "react";
import { HeroButton, MainContainer, Subtitle, Title } from "./styled";

export default function Hero() {
  return (
    <MainContainer>
      <Title>Synths</Title>
      <Subtitle>Baseline</Subtitle>
      <HeroButton>Sign up</HeroButton>
    </MainContainer>
  );
}
