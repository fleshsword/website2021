import Imagetile from "../components/imageTile";
import WorkXp from "../components/workxp";
import { Hero, Container, TileContainer } from "./home.css";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero>
          Hey, I’m Todd. I design digital products for global institutions like
          HSBC, Bain & Company and Google. <br></br>I also work with startups
          like Sportninja, Hubrick and Exodus. Sometime I write articles about
          design too.
        </Hero>
      </Container>
      <TileContainer>
        <Imagetile
          label="Google"
          image="/img/sportninjahome.png"
          bgColor="#C6FFF1"
        />
        <Imagetile
          label="Hubrick"
          image="/img/sportninjahome.png"
          bgColor="#C6FFCF"
        />
        <Imagetile
          label="HSBC"
          image="/img/sportninjahome.png"
          bgColor="#C6FFF1"
        />
        <Imagetile
          label="Exodus"
          image="/img/sportninjahome.png"
          bgColor="#C6FFCF"
        />
        <Imagetile
          label="SportNinja"
          image="/img/sportninjahome.png"
          bgColor="#C6FFF1"
        />
      </TileContainer>

      <WorkXp />
    </div>
  );
}
