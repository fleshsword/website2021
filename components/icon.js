import styled from "styled-components";

export default function Icon({ src, href }) {
  const Img = <img src={src} />;
  return (
    <Container>
      {href && <a href={href}>{Img}</a>}

      {!href && Img}
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 40px;
  }
`;
