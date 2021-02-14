import { Container } from "./navbar.css";

export default function Navbar() {
  return (
    <Container>
      <div class="menu">
        <div class="cross">
          <div class="crossleft"></div>
          <div class="crossright"></div>
        </div>
        <span>Home</span>
        <span>Portfolio</span>
        <span>About</span>
        <span>Articles</span>
        <span>Contact</span>
        <div class="cross">
          <div class="crossleft"></div>
          <div class="crossright"></div>
        </div>
      </div>
    </Container>
  );
}
