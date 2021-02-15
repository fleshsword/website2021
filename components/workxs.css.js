import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 80px 72px 160px 72px;
  font-family: "SequelSans-BookDisplay", Arial, Helvetica, sans-serif, San serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;

  > div {
    flex: 1;
  }

  .workheading {
    font-family: Sequel Sans;
    font-style: normal;
    font-weight: normal;
    font-family: "SequelSans-MediumHead";
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }
  ul {
    list-style: circle;
  }
`;
