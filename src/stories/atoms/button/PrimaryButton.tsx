import styled, { css } from "styled-components";
import Button, { ButtonCss } from "./Button";

export const PrimaryButtonCss = css<{ darkMode?: boolean }>`
  ${ButtonCss}
  background-color: ${(p) => p.theme.button?.bgColor};
  color: ${(p) => p.theme.button?.color};
  text-transform: uppercase;
  letter-spacing: 1.5px;

  ${(p) =>
    p.darkMode &&
    `
      background-color: ${p.theme.colors.white};
      color: ${p.theme.colors.black};
  `}
`;

const PrimaryButton = styled(Button)<{ darkMode?: boolean }>`
  ${PrimaryButtonCss}
`;

export default PrimaryButton;
