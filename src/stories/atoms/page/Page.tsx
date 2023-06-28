import styled from "styled-components";

const Page = styled.div<{ noPadding?: boolean }>`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 0 20px 50px;
  ${(p) =>
    p.noPadding &&
    `
    padding: 0 12px;
  `}
`;

export const Container = styled.div<{ smallPadding?: boolean }>`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  ${(p) =>
    p.smallPadding &&
    `
    padding: 0 12px;
  `}
`;
export default Page;
