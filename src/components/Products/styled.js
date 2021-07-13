import styled from "styled-components";

import { Button } from "../styles/Button";

export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: ${(props) => props.theme.spacing.normal};
  margin-top: ${(props) => props.theme.spacing.normal};
  margin-bottom: ${(props) => props.theme.spacing.normal};
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.accent};
  text-align: center;
  text-transform: uppercase;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #cc322b;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  color: #fff;
  margin-left: ${(props) => props.theme.spacing.normal};
  margin-top: ${(props) => props.theme.spacing.normal};
  border-radius: 5px;
`;

export const CardImage = styled.img`
  width: 250px;
  height: 130px;
  padding-top: 10px;
  padding-bottom: ${(props) => props.theme.spacing.normal};
`;

export const CardTitle = styled.h3`
  padding-bottom: ${(props) => props.theme.spacing.large};
  color: ${(props) => props.theme.colors.primary};
`;

export const CardButton = styled(Button)`
  font-weight: bold;
`;

export const CardLearnButton = styled(Button)`
  margin-top: ${(props) => props.theme.spacing.small};
  background: ${(props) => props.theme.colors.accent};
  color: #000;
  &:hover {
    opacity: 1.2;
    cursor: pointer;
    color: #fff;
  }
`;
