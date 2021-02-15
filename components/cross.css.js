import styled from "styled-components";

export const Container = styled.div`
  height: 16px;
  width: 16px;
  position: absolute;
  left: ${(p) => p.xpos}px;
  right: ${(p) => p.ypos}px;
  top: ${(p) => p.tpos}px;
  bottom: ${(p) => p.bpos}px;

  .crossleft {
    border-bottom: 1.5px solid #fefefe;
    border-right: 1.5px solid #fefefe;
    width: 8px;
    height: 8px;
  }
  .crossright {
    border-top: 1.5px solid #fefefe;
    border-left: 1.5px solid #fefefe;
    width: 8px;
    height: 8px;
    margin-left: 7px;
    margin-top: -1px;
  }
`;
