import { Container } from "./messagebox.css";
import Icon from "./icon";

export default function Messagebox() {
  return (
    <Container>
      Message me
      <Icon
        padding="10"
        src="svg/mail_icon.svg"
        href="https://www.behance.net/toddcantley"
      />{" "}
    </Container>
  );
}
