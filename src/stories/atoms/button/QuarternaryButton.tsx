import styled from "styled-components";
import Button from "./Button";

const QuartenaryButton = styled(Button)`
  border: ${(p) => `1px solid ${p.theme.colors.border}`};
  justify-content: space-between;
  font-size: 14px;
  padding: 6px 15px 6px 18px;
  margin-right: 10px;
  border-radius: ${(p) => p.theme.button?.borderRadius || "22px"};
  font-weight: 300;

  ${(p) =>
    p.darkMode &&
    `
      color: ${p.theme.colors.white};
      background-color: ${p.theme.colors.black};
      border: 1px solid ${p.theme.colors.white};
  `}
`;

export default QuartenaryButton;
