import styled from "styled-components";

export default function Icon({ src, href, padding }) {
  const Img = <img src={src} />;
  return (
    <Container padding={padding}>
      {href && <a href={href}>{Img}</a>}

      {!href && Img}
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 24px;
    height: 24px;
    margin-top: ${(p) => p.padding}px;
  }
`;
