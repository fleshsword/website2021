import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  padding: 40px 32px;

  span {
    writing-mode: vertical-lr;
    text-transform: uppercase;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0.11em;
    text-align: center;
    margin-bottom: 52px;
    > span:not(:last-child) {
      margin-bottom: 0px;
    }
  }

  .menu {
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100% - 80px);
    position: absolute;
  }
`;
