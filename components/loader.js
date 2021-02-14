import { Container, Column } from "./loader.css";
import Navbar from "./navbar";
import Footer from "./footer";

const EmptyComponent = () => <span />;

function Loader(Content, Hero = EmptyComponent) {
  function EnhancedChild() {
    return (
      <Container>
        <Column>
          <Navbar />
          <div>
            <Hero />
            <Content />
          </div>
        </Column>
        <Footer />
      </Container>
    );
  }
  return EnhancedChild;
}

export default Loader;
