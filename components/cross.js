import { Container } from "./cross.css";

export default function Cross({ xpos, ypos, tpos, bpos }) {
  return (
    <Container xpos={xpos} ypos={ypos} tpos={tpos} bpos={bpos}>
      <div className="crossleft"></div>
      <div className="crossright"></div>
    </Container>
  );
}
