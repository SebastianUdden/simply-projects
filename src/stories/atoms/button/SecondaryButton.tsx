import styled from "styled-components";
import Button from "./Button";

const SecondaryButton = styled(Button)`
  border: ${(p) => `1px solid ${p.theme.colors.black}`};
  text-transform: uppercase;
  letter-spacing: 1.5px;

  ${(p) =>
    p.darkMode &&
    `
      color: ${p.theme.colors.white};
      background-color: ${p.theme.colors.black};
      border: 1px solid ${p.theme.colors.white};
  `}
`;

export default SecondaryButton;
