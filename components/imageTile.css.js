import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background: ${(p) => p.bgColor};
  max-width: 1140px;
  width: 100%;
  height: 600px;
  label {
    font-size: 80px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -3px;
  }
  img {
    top: 50%;
    position: absolute;
    width: 500px;
    margin-top: -100px;
  }
`;
