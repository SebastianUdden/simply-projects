import styled from "styled-components";
import Button from "./Button";

const TertiaryButton = styled(Button)`
  border: ${(p) => `1px solid ${p.theme.colors.surfaceCold}`};
  background-color: ${(p) => p.theme.colors.surfaceCold};
  color: ${(p) => p.theme.colors.black};
  font-size: 14px;
  padding: 6px 26px;
  font-weight: 400;
  border-radius: ${(p) => p.theme.button?.borderRadius || "26px"};
  :hover {
    box-shadow: rgba(18, 18, 18, 0.15) 0 0 0 6px;
  }
`;

export default TertiaryButton;
