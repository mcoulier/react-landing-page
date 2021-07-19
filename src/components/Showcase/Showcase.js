import React from "react";
import {
  ShowContainer,
  SectionTitle,
  ShowButton,
  ContentWrapper,
  Input,
  InputLabel,
  InputContainer,
  ShowText,
  ShowPropImage,
} from "./styled";
import ob6 from "../../assets/ob6.png";

export default function Products() {
  return (
    <ShowContainer>
      <SectionTitle>Coming soon</SectionTitle>
      <ContentWrapper>
        <ShowPropImage src={ob6} alt="" />
        <ShowText>
          Podcasting operational change management inside of workflows to
          establish a framework. Taking seamless key performance indicators
          offline to maximise the long tail.
        </ShowText>
        <InputContainer>
          <InputLabel htmlFor="gift">E-mail</InputLabel>
          <Input placeholder="morodor@email.com" name="gift" />
          <ShowButton>Notify me!</ShowButton>
        </InputContainer>
      </ContentWrapper>
    </ShowContainer>
  );
}
