import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Button, Container, ContainerSocialMedia, Title } from "./styles";

const Contact = () => {
  return (
    <>
      <Container>
        <Title>Contate-me</Title>
        <ContainerSocialMedia>
          <Button
            href="https://www.linkedin.com/in/lucas-soares-lopes/"
            target="_blank"
          >
            <AiFillLinkedin />
          </Button>
          <Button href="https://github.com/Lucaslopes1995" target="_blank">
            <AiFillGithub />
          </Button>
          <Button
            href="https://www.instagram.com/lucaslopes54/"
            target="_blank"
          >
            <BsInstagram />
          </Button>

          <Button href="mailto:lucaslopes@gea.inatel.br" target="_blank">
            <AiOutlineMail />
          </Button>
        </ContainerSocialMedia>
      </Container>
    </>
  );
};

export default Contact;
