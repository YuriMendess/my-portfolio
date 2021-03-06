/* eslint-disable react/no-unescaped-entities */
import { Content, Section } from "../../components/layout/styles";
import { HomeImg, StyledHome, HomeTitle, HomeDescription } from "./styles";
import Socials from "../../components/socials";
import { Button } from "../../components/button/styles";
import Blob from "../../components/blob/index";

const Home = () => {
  return (
    <Section>
      <StyledHome>      
        <HomeImg>
          <Blob></Blob>
        </HomeImg>
        <Content>
          <HomeTitle>Hello, I'm <br/> <span>Yuri Mendes</span></HomeTitle>
          <HomeDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime rem, non eum aspernatur, amet perspiciatis voluptates necessitatibus quas quae illo eveniet esse itaque aut unde nisi natus sequi sit? Mollitia?
          </HomeDescription>
          <Button href="#about" color="primary" margin="1rem">About Me</Button>
          <Button href="#portfolio" color="secondary">My Projects</Button>
        </Content>
      </StyledHome>
    </Section>
    
  );
};

export default Home;
