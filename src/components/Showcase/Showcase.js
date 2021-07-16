import React from "react";
import {
  ShowContainer,
  SectionTitle,
  ShowButton,
  ContentWrapper,
  GiftImage,
  Input,
  InputLabel,
  InputContainer,
  ShowText,
} from "./styled";
import gift from "../../assets/gift.png";

export default function Products() {
  return (
    <ShowContainer>
      <SectionTitle>Showcase</SectionTitle>
        <ShowText>
          Podcasting operational change management inside of workflows to
          establish a framework. Taking seamless key performance indicators
          offline to maximise the long tail. Keeping your eye on the ball while
          performing a deep dive on the start-up mentality to derive convergence
          on cross-platform integration.
        </ShowText>
      <ContentWrapper>
        <GiftImage src={gift} alt="" />
        <InputContainer>
          <InputLabel htmlFor="gift">E-mail</InputLabel>
          <Input placeholder="morodor@email.com" name="gift" />
          <ShowButton>Claim Gift</ShowButton>
        </InputContainer>
      </ContentWrapper>
    </ShowContainer>
  );
}
