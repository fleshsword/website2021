import { Container } from "./navbar.css";
import Cross from "../components/cross";

export default function Navbar() {
  return (
    <Container>
      <Cross xpos="26" tpos="44" />
      <Cross xpos="26" bpos="36" />
      <Cross ypos="26" />
      <Cross ypos="26" bpos="36" />
      <div className="menu">
        <span>Home</span>
        <span>Portfolio</span>
        <span>About</span>
        <span>Articles</span>
        <span>Contact</span>
      </div>
    </Container>
  );
}
