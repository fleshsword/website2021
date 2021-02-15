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
  height: 72vh;
  border-radius: 2px;
  margin: auto;
  label {
    font-size: 220px;
    color: #000;
    text-transform: uppercase;
    font-family: "Druk Cond Web";
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
  }
  img {
    top: 50%;
    position: absolute;
    width: 500px;
    margin-top: -100px;
  }
`;
