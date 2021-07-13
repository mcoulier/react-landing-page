import React from "react";
import {
  Card,
  CardImage,
  CardsContainer,
  SectionContainer,
  SectionTitle,
} from "./styled";
import { Button } from "../styles/Button";
import moog from "../../assets/moog.png";

export default function Section() {
  return (
    <SectionContainer>
      <SectionTitle>About</SectionTitle>
      <CardsContainer>
        <Card>
          <CardImage src={moog} />
          Title
          <Button>Buy Me</Button>
        </Card>
        <Card>
          <CardImage src={moog} />
          Title
          <Button>Buy Me</Button>
        </Card>
        <Card>
          <CardImage src={moog} />
          Title
          <Button>Buy Me</Button>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
}
