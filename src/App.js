import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Section from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    overflow-x: hidden;
  }
`;

const theme = {
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
};

const AppWrapper = styled.div`
  background-color: ${theme.colors.tertiary};
  display: flex;
  flex-flow: column;
`;

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Section />
        <Showcase />
        <Footer />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
