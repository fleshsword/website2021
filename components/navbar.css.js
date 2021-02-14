import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  padding: 40px 40px;

  span {
    writing-mode: vertical-lr;
    text-transform: uppercase;
    font-size: 10px;
    margin-bottom: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.11em;
    text-align: center;
  }

  .menu {
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #333333;
  }

  .cross {
    width: 20px;
    width: 20px;
    margin-left: -4px;
  }
  .crossleft {
    border-bottom: 1.5px solid #fefefe;
    border-right: 1.5px solid #fefefe;
    width: 10px;
    height: 10px;
  }
  .crossright {
    border-top: 1.5px solid #fefefe;
    border-left: 1.5px solid #fefefe;
    width: 10px;
    height: 10px;
    margin-left: 9px;
    margin-top: -1px;
  }
`;
