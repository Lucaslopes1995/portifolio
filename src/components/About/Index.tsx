import perfilPicture from "../../assets/lucas-soares-lopes.jpeg";
import {
  Container,
  ContainerPicture,
  ContainerText,
  Description,
  Picture,
  Title,
} from "./styles";

const About = () => {
  const getAge = () => {
    return new Date(`11/10/${new Date().getFullYear()}`) < new Date()
      ? new Date().getFullYear() - new Date("11/10/1995").getFullYear()
      : new Date().getFullYear() - new Date("11/10/1995").getFullYear() - 1;
  };
  return (
    <>
      <Container id="sobre">
        <ContainerPicture>
          <Picture src={perfilPicture} alt="foto de perfil" />
        </ContainerPicture>
        <ContainerText>
          <Title>Desenvolvedor Fullstack</Title>
          <Description>
            Olá meu nome é Lucas Soares Lopes, tenho {getAge()} anos, e sou uma
            pessoa apaixonado pela área da tecnologia. Atualmente sou formado em
            engenharia de Controle e Automação e formado na trybe como
            desenvolvedor Web full-stack. Trabalho hà 1 ano como desenvolvedor
            full-stack como bolsista na Ritualiza cosméticos e finalizo minha
            bolsa em maio de 2023. Sou uma pessoa bem curiosa e gosto bastante
            da área de tecnologia.
          </Description>
        </ContainerText>
      </Container>
    </>
  );
};

export default About;
