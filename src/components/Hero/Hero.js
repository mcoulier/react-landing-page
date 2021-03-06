import React from "react";
import { HeroButton, MainContainer, Subtitle, Title } from "./styled";

export default function Hero({titleRef}) {
  return (
    <MainContainer>
      <Title ref={titleRef}>Synth 70</Title>
      <Subtitle>Taking you back to the future</Subtitle>
      <HeroButton>Sign up</HeroButton>
    </MainContainer>
  );
}
