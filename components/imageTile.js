import { Container } from "./imageTile.css";

export default function Imagetile({ label, image, bgColor }) {
  return (
    <Container bgColor={bgColor}>
      <label>{label}</label>
      <img src={image} />
      <div>hello</div>
    </Container>
  );
}
