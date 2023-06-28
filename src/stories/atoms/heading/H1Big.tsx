import styled from "styled-components";

const H1Big = styled.h1`
  font-size: 34px;
  line-height: 40px;
  font-weight: 700;
  text-transform: ${(p) =>
    p.theme.headers.uppercaseH1 ? "uppercase" : "inherit"};
  @media (min-width: 800px) {
    font-size: 56px;
    line-height: 64px;
  }
`;

export default H1Big;
