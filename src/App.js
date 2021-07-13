import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Section from "./components/FirstSection/Section";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

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
    primary: "#0070f3",
  },
  spacing: {
    small: "10px",
    normal: "20px",
    large: "40px",
  },
};

const AppWrapper = styled.div`
  background: #854a20;
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
        <About />
        <Footer />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
