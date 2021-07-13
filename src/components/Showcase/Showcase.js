import React from "react";
import {
  AboutContainer,
  SectionTitle,
  SplitWrapper,
  LeftContent,
  RightContent,
  SectionImage,
} from "./styled";
import synth from "../../assets/ms1.png";

export default function Products() {
  return (
    <AboutContainer>
      <SectionTitle>Showcase</SectionTitle>
      <SplitWrapper>
        <LeftContent>
          Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
          zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
          bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak
          met letters nam en ze door elkaar husselde om een font-catalogus te
          maken.
        </LeftContent>
        <RightContent>
          <SectionImage src={synth} alt="" />
        </RightContent>
      </SplitWrapper>
    </AboutContainer>
  );
}
