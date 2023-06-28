import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  line-height: 38px;
  font-weight: 700;
  text-transform: ${(p) =>
    p.theme.headers.uppercaseH1 ? "uppercase" : "inherit"};
  @media (min-width: 800px) {
    font-size: 42px;
    line-height: 48px;
  }
`;

export default H1;
