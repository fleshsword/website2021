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
  width: 870px;
  display: flex;
  align-items: center;
  justify-content: middle;
  padding: 0 40px;
  color: #fff;
  font-family: Sequel Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 71px;
  letter-spacing: 0em;
  margin-bottom: 200px;
`;

export const TileContainer = styled.div`
  > div {
    margin-bottom: 80px;
  }
`;
