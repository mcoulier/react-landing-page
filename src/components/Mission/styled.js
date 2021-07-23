import styled from "styled-components";

export const MissionWrapper = styled.div`
  background-image: linear-gradient(
    to bottom,
    #8acfb9,
    #82cab3,
    #7ac5ad,
    #72c1a8,
    #6abca2
  );
  padding-bottom: ${(props) => props.theme.spacing.large};
  padding-top: ${(props) => props.theme.spacing.normal};
  margin-top: ${(props) => props.theme.spacing.normal};
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  text-transform: uppercase;
  margin-top: 0;
  font-size: ${(props) => props.theme.font.sectionTitle};
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const IconCard = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  background: #68a692;
  padding: ${(props) => props.theme.spacing.small};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: ${(props) => props.theme.spacing.normal}; ;
`;

export const Icon = styled.img`
  width: 65px;
  height: 65px;
`;

export const CardText = styled.p`
  color: #fff;
  padding-left: ${(props) => props.theme.spacing.small};
  font-size: 18px;
`;
