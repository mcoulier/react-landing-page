import styled from "styled-components";

export const MissionWrapper = styled.div`
  background-image: linear-gradient(
    to bottom,
    #75c8ae,
    #7acab1,
    #80ccb4,
    #85cdb6,
    #8acfb9
  );
  padding-top: ${(props) => props.theme.spacing.large};
  padding-bottom: ${(props) => props.theme.spacing.large};
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  text-transform: uppercase;
  margin-top: 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  //align-items: center;
  justify-content: space-evenly;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const IconCard = styled.div`
  width: 275px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #68a692;
  padding: ${(props) => props.theme.spacing.small};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: ${(props) => props.theme.spacing.normal};;
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

export const CardText = styled.p`
  //color: ${(props) => props.theme.colors.primary};
  padding-left: ${(props) => props.theme.spacing.small};
  font-size: 20px;
`;
