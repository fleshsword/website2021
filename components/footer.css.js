import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 80px;
  background-color: #1b1b1b;
  height: 88px;
`;

export const IconSet = styled.div`
  display: flex;
  > div:not(:last-child) {
    margin-right: 20px;
  }
`;
