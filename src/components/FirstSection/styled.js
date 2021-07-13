import styled from "styled-components";

export const SectionContainer = styled.section`
  background-color: #479267;
  height: 50vh;
  width: 100%;
  border-top-left-radius: 100px 20%;
  border-top-right-radius: 100px 20%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
`;

export const SectionTitle = styled.h2`
  color: #fff;
  text-align: center;
  padding-top: ${(props) => props.theme.spacing.small};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.large};
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
  color: #fff;
`;

export const CardImage = styled.img`
  width: 250px;
  height: 130px;
  padding-top: 10px;
`;
