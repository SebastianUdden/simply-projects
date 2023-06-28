import styled from "styled-components";

export interface ITreeView {
  id: string;
  title: string;
  color?: string;
  bgColor?: string;
  connectionsDown?: ITreeView[];
  connectionsUp?: ITreeView[];
  fontSize?: number;
  isFirst?: boolean;
  direction?: "up" | "down";
  onClick?: (id: string) => void;
}

const TreeView = ({
  title,
  color,
  bgColor,
  connectionsUp,
  connectionsDown,
  fontSize = 16,
  isFirst = false,
  direction,
  onClick,
}: ITreeView) => {
  const enabled = !isFirst && !!title;
  return (
    <Wrapper>
      {connectionsUp &&
        connectionsUp.length > 0 &&
        (!direction || direction === "up") && (
          <Connections direction={"up"}>
            {connectionsUp.map((c) => (
              <TreeView
                {...c}
                fontSize={fontSize - 3}
                direction="up"
                onClick={onClick}
              />
            ))}
          </Connections>
        )}
      <Title
        tiny={!title}
        disabled={!enabled}
        color={color}
        bgColor={bgColor}
        onClick={() => onClick && onClick(title)}
        fontSize={isFirst ? 20 : fontSize}
      >
        {title}
      </Title>
      {connectionsDown &&
        connectionsDown.length > 0 &&
        (!direction || direction === "down") && (
          <Connections direction={"down"}>
            {connectionsDown.map((c) => (
              <TreeView
                {...c}
                fontSize={fontSize - 2}
                direction="down"
                onClick={onClick}
              />
            ))}
          </Connections>
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;
const Title = styled.button<{
  tiny?: boolean;
  color?: string;
  bgColor?: string;
  fontSize: number;
}>`
  font-size: ${(p) => `${p.fontSize}px` || "12px"};
  padding: ${(p) => `${p.fontSize / 2}px` || "12px"};
  box-sizing: border-box;
  display: block;
  border: none;
  color: ${(p) => p.color || "#fff"};
  background-color: ${(p) => p.bgColor || "#222"};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 500px;
  margin: 0 0 5px;
  width: 2px;
  height: 2px;
  ${(p) =>
    !p.tiny &&
    `
    height: auto;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
    :active {
        opacity: 0.5;
    }
  `}
  ${(p) =>
    p.disabled &&
    `
    cursor: default;
    :hover {
        opacity: 1;
    }
    :active {
        opacity: 1;
    }
    `}
`;
const Connections = styled.div<{ direction: "up" | "down" }>`
  display: flex;
  justify-content: center;
  gap: 5px;
  ${(p) =>
    p.direction === "up" &&
    `
    align-items: flex-end;
  `}
  ${(p) =>
    p.direction === "down" &&
    `
    align-items: flex-start;
  `}
`;

export default TreeView;
