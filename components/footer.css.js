import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 80px;
`;

export const IconSet = styled.div`
  display: flex;
  > div:not(:last-child) {
    margin-right: 8px;
  }
`;
