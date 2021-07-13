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

export default function Products() {
  return (
    <SectionContainer>
      <SectionTitle>Products</SectionTitle>
      <CardsContainer>
        <Card>
          <CardImage src={ms1} />
          <CardTitle>Behringer MS-1</CardTitle>
          <CardButton>Buy Me</CardButton>
          <CardLearnButton>Learn More</CardLearnButton>
        </Card>
        <Card>
          <CardImage src={vocoder} />
          <CardTitle>Vocoder VC340</CardTitle>
          <CardButton>Buy Me</CardButton>
          <CardLearnButton>Learn More</CardLearnButton>
        </Card>
        <Card>
          <CardImage src={korg} />
          <CardTitle>Korg MS-20</CardTitle>
          <CardButton>Buy Me</CardButton>
          <CardLearnButton>Learn More</CardLearnButton>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
}
