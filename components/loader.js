import { Container, Column } from "./loader.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Messagebox from "./messagebox";

const EmptyComponent = () => <span />;

function Loader(Content, Hero = EmptyComponent) {
  function EnhancedChild() {
    return (
      <Container>
        <Messagebox />
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
