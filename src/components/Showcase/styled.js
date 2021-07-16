import styled from "styled-components";
import { Button } from "../styles/Button";

export const ShowContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
  border: 1px solid #cc322b;
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  text-align: center;
  text-transform: uppercase;
  padding-bottom: ${(props) => props.theme.spacing.normal};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const ShowButton = styled(Button)``;

export const GiftImage = styled.img`
  transform: scale(0.8) rotate(0.1turn);
`;

export const InputLabel = styled.label``;

export const Input = styled.input`
  height: 25px;
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ShowText = styled.div`
  line-height: 1.6;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-left: 2px solid ${(props) => props.theme.colors.primary};
  border-right: 2px solid ${(props) => props.theme.colors.primary};
  text-align: center;
`;
