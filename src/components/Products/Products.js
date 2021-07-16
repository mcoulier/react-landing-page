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
import ms1 from "../../assets/ms1.png";
import korg from "../../assets/korg.png";
import vocoder from "../../assets/vocoder.png";

export default function Products({ title }) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <CardsContainer>
        <Card>
          <CardImage src={ms1} alt="" />
          <CardTitle>Behringer MS-1</CardTitle>
          <CardButton>Add to cart</CardButton>
          <CardLearnButton>Learn More</CardLearnButton>
        </Card>
        <Card>
          <CardImage src={vocoder} alt="" />
          <CardTitle>Vocoder VC340</CardTitle>
          <CardButton>Add to cart</CardButton>
          <CardLearnButton>Learn More</CardLearnButton>
        </Card>
        <Card>
          <CardImage src={korg} alt="" />
          <CardTitle>Korg MS-20</CardTitle>
          <CardButton>Add to cart</CardButton>
          <CardLearnButton>Learn More</CardLearnButton>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
}
