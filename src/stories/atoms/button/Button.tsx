import styled, { css } from "styled-components";

type Size = "small" | "medium" | "large";

export const ButtonCss = css<{
  size?: Size;
  wide?: boolean;
  darkMode?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 26px;
  font-weight: bgC00;
  color: ${(p) => p.theme.button?.bgColor};
  border: ${(p) => `1px solid ${p.theme.button?.bgColor}`};
  background-color: ${(p) => p.theme.button?.color};
  font-size: 12px;
  padding: 10px 36px;
  border-radius: ${(p) => p.theme.button?.borderRadius || "25px"};
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;
  :hover {
    box-shadow: rgba(18, 18, 18, 0.1) 0 0 0 6px;
  }

  ${(p) =>
    p.size === "small" &&
    `
      font-size: 11px;
      padding: 6px 36px;
      border-radius: ${p.theme.button?.borderRadius || "28px"};
    `}
  ${(p) =>
    p.size === "large" &&
    `
      font-size: 14px;
      padding: 14px 36px;
      border-radius: ${p.theme.button?.borderRadius || "31px"};
    `}
  ${(p) =>
    p.wide &&
    `
      width: 100%;
    `}
`;

const Button = styled.button<{
  size?: Size;
  wide?: boolean;
  darkMode?: boolean;
}>`
  ${ButtonCss}
`;

export default Button;
