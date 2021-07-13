import React from "react";
import {
  Card,
  CardImage,
  CardsContainer,
  CardTitle,
  CardButton,
  CardLearnButton,
  SectionContainer,
  SectionTitle,
} from "./styled";
import moog from "../../assets/moog.png";

export default function Section() {
  return (
    <SectionContainer>
      <SectionTitle>Products</SectionTitle>
      <CardsContainer>
        <Card>
          <CardImage src={moog} />
          <CardTitle>Title</CardTitle>
          <CardButton>Buy Me</CardButton>
          <CardLearnButton>Learn More</CardLearnButton>
        </Card>
        <Card>
          <CardImage src={moog} />
          <CardTitle>Title</CardTitle>
          <CardButton>Buy Me</CardButton>
          <CardLearnButton>Learn More</CardLearnButton>
        </Card>
        <Card>
          <CardImage src={moog} />
          <CardTitle>Title</CardTitle>
          <CardButton>Buy Me</CardButton>
          <CardLearnButton>Learn More</CardLearnButton>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
}
