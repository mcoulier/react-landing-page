import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-top: 1px solid #cc322b;
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  text-align: center;
  text-transform: uppercase;
  padding-bottom: ${(props) => props.theme.spacing.normal};
`;

export const SplitWrapper = styled.div`
  height: 400px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  width: 50%;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 1.6;
`;

export const RightContent = styled.div`
  width: 50%;
`;

export const SectionImage = styled.img`
  padding-left: ${(props) => props.theme.spacing.normal};
  border-left: 1px solid #cc322b;
  width: 100%;
`;
