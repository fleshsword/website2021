import { Container } from "./navbar.css";

export default function Navbar() {
  return (
    <Container>
      <div className="menu">
        <div className="cross">
          <div className="crossleft"></div>
          <div className="crossright"></div>
        </div>
        <span>Home</span>
        <span>Portfolio</span>
        <span>About</span>
        <span>Articles</span>
        <span>Contact</span>
        <div className="cross">
          <div className="crossleft"></div>
          <div className="crossright"></div>
        </div>
      </div>
    </Container>
  );
}
