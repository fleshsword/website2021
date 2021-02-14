import { Container, Wrapper, IconSet } from "./footer.css";
import Icon from "./icon";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <IconSet>
          <Icon src="img/sportninjahome.png" href="http://google.com" />
          <Icon src="img/sportninjahome.png" href="http://google.com" />
          <Icon src="img/sportninjahome.png" href="http://google.com" />
          <Icon src="img/sportninjahome.png" href="http://google.com" />
          <Icon src="img/sportninjahome.png" href="http://google.com" />
        </IconSet>
        <div>right</div>
      </Wrapper>
    </Container>
  );
}
