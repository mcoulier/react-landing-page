import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#E5771E",
    secondary: "#e48e0c",
    tertiary: "#5A3D2B",
    accent: "#75C8AE",
    alert: "#cc322b",
  },
  spacing: {
    small: "10px",
    normal: "20px",
    large: "40px",
  },
  font: {
    sectionTitle: "25px",
  },
};

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
      overflow-x: hidden;
      background-color: ${theme.colors.tertiary};
    }
    button {
      font-family: 'Raleway', sans-serif;
    }
  `;

export const ContentWrapper = styled.div`
  background-color: ${theme.colors.tertiary};
  display: flex;
  flex-flow: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`;
