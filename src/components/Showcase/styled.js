import styled from "styled-components";
import { Button } from "../styles/Button";

export const ShowContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  text-align: center;
  text-transform: uppercase;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export const ShowButton = styled(Button)`
  margin-bottom: ${(props) => props.theme.spacing.normal};
`;

export const GiftImage = styled.img`
  transform: scale(0.7) rotate(0.1turn);
`;

export const ShowPropImage = styled.img`
  width: 85%;
  margin-bottom: ${(props) => props.theme.spacing.normal};
`;

export const InputLabel = styled.label``;

export const Input = styled.input`
  font-family: "Raleway", sans-serif;
  height: 25px;
  margin-bottom: ${(props) => props.theme.spacing.small};
  outline: none;
  box-shadow: none;
  min-width: 80px;
  width: 100%;
  -webkit-appearance: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ShowText = styled.div`
  line-height: 1.7;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => props.theme.spacing.normal};
  border-left: 2px solid ${(props) => props.theme.colors.primary};
  border-right: 2px solid ${(props) => props.theme.colors.primary};
  text-align: center;
`;
