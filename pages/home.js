import Imagetile from "../components/imageTile";
import WorkXp from "../components/workxp";
import { Hero, Container, TileContainer } from "./home.css";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero>
          Hey, I’m Todd. I design digital products for global institutions like
          HSBC, Bain & Company and Google. I also work with startups like
          Sportninja, Hubrick and Exodus. Sometime I write articles about design
          too.
        </Hero>
      </Container>
      <TileContainer>
        <Imagetile
          label="SportNinja"
          image="/img/sportninjahome.png"
          bgColor="red"
        />
        <Imagetile
          label="SportNinja"
          image="/img/sportninjahome.png"
          bgColor="purple"
        />
      </TileContainer>

      <WorkXp />
    </div>
  );
}
