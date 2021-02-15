import { Container, Wrapper, IconSet } from "./footer.css";
import Icon from "./icon";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <IconSet>
          <Icon
            src="svg/linkedin_icon.svg"
            href="https://www.linkedin.com/in/toddcantley/"
          />
          <Icon
            src="svg/dribble_icon.svg"
            href="https://dribbble.com/ToddCantley"
          />
          <Icon
            src="svg/spotify_icon.svg"
            href="spotify:playlist:4uLBO5Ya4CDjng1YFv0w0q"
          />
          <Icon
            src="svg/behance_icon.svg"
            href="https://www.behance.net/toddcantley"
          />
        </IconSet>
        <div>right</div>
      </Wrapper>
    </Container>
  );
}
