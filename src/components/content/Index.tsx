import About from "../About/Index";
import Contact from "../Contact/Index";
import Header from "../Header/Index";
import { Container } from "./styles";

const Content = () => {
  return (
    <>
      <Container>
        <Header />
        <About />
        <Contact />
      </Container>
    </>
  );
};

export default Content;
