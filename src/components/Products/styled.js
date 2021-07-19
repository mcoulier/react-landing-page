import styled from "styled-components";

import { Button } from "../styles/Button";

export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme.colors.tertiary};
  margin-bottom: ${(props) => props.theme.spacing.large};
  margin-top: ${(props) => props.theme.spacing.normal};  
  width: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  margin-left: ${(props) => props.theme.spacing.normal};
  margin-top: ${(props) => props.theme.spacing.normal};
  border-radius: 10px;
  padding: ${(props) => props.theme.spacing.normal};
  transition: 400ms ease-in-out;
  background: #383028;
  &:hover {
    transform: translateY(-4px);
  }
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const CardImage = styled.img`
  width: 250px;
  height: 130px;
  padding-top: 10px;
  padding-bottom: ${(props) => props.theme.spacing.normal};
`;

export const CardTitle = styled.h3`
  padding-bottom: ${(props) => props.theme.spacing.normal};
  color: ${(props) => props.theme.colors.primary};
`;

export const CardButton = styled(Button)`
  font-weight: bold;
`;

export const CardLearnButton = styled(Button)`
  margin-top: ${(props) => props.theme.spacing.small};
  background: #6ebaa2;
  &:hover {
    opacity: 1.2;
    cursor: pointer;
    border: none;
    background: #74c4ab;
  }
`;
