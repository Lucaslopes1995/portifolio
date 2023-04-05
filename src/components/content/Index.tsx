import About from "../About/Index";
import Header from "../Header/Index";
import { Container } from "./styles";

const Content = () => {
  return (
    <>
      <Container>
        <Header />
        <About />
      </Container>
    </>
  );
};

export default Content;
