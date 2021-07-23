import { ThemeProvider } from "styled-components";
import {
  theme,
  GlobalStyle,
  ContentWrapper,
} from "./components/styles/GlobalStyles";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import Mission from "./components/Mission/Mission";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar showBrand={inView} />
        <Hero titleRef={ref} />
        <ContentWrapper>
          <Products title="Newest Products" />
          <Showcase />
          <Products title="More Products" />
        </ContentWrapper>
        <Mission />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
