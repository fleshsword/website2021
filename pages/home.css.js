import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Hero = styled.h1`
  height: 284px;
  width: 950px;
  display: flex;
  align-items: center;
  justify-content: middle;
  color: #fff;
  font-family: Sequel Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 71px;
  letter-spacing: 0em;
  font-family: "SequelSans-BookHead", Arial, Helvetica, sans-serif, San serif;
`;

export const TileContainer = styled.div`
  > div {
    margin-bottom: 20vh;
  }
`;
