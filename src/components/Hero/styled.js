import styled from "styled-components";
import hero from "../../assets/synth.jpg";
import { Button } from "../styles/Button";

export const MainContainer = styled.section`
  position: relative;
  height: 50vh;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 2px solid #cc322b;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${hero});
    background-position: bottom right;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    transform: scaleX(-1);
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 60px;
  color: #ffffff;
  padding-top: ${(props) => props.theme.spacing.normal};
  position: relative;
  text-transform: uppercase;
`;

export const Subtitle = styled.h3`
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  position: relative;
`;

export const HeroButton = styled(Button)`
  position: relative;
`;
