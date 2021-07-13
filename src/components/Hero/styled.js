import styled from "styled-components";
import hero from "../../assets/crowd.jpg";

export const MainContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: #b57629;
  background-image: url(${hero});
  background-size: cover;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 60px;
  color: #ffffff;
  padding-top: ${(props) => props.theme.spacing.normal};
`;

export const Subtitle = styled.h3`
  font-size: 25px;
  color: #ffffff;
  text-align: center;
`;
