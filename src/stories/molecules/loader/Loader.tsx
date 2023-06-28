import { useEffect, useState } from "react";
import styled from "styled-components";

interface ILoader {
  onFinishLoading: () => void;
}

const Loader = ({ onFinishLoading }: ILoader) => {
  const [beginLoading, setBeginLoading] = useState(false);
  const [fade, setFade] = useState(false);
  const loadTime = 500;
  useEffect(() => {
    setBeginLoading(true);
    setTimeout(() => {
      setFade(true);
    }, loadTime - 300);
    setTimeout(() => {
      onFinishLoading();
    }, loadTime);
  }, []);
  return (
    <Wrapper fade={fade}>
      <Bar beginLoading={beginLoading} loadTime={loadTime} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ fade: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 40px;
  display: flex;
  align-items: center;
  background-color: #222;
  opacity: 1;
  transition: opacity 300ms ease;
  ${(p) =>
    p.fade &&
    `
    opacity: 0;
    `}
  @media(min-width: 1200px) {
    padding: 40px 200px;
  }
`;
const Bar = styled.div<{ beginLoading: boolean; loadTime: number }>`
  width: 40px;
  height: 40px;
  border-radius: 400px;
  transition: ${(p) => `width ${p.loadTime}ms ease`};
  ${(p) =>
    p.beginLoading &&
    `
    width: 100%;
    background-color: #fff;
  `}
`;

export default Loader;
