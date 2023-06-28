import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import nobiaDxArchitecture from "../../assets/nobia-dx-architecture.png";
import NobiaIcon from "../../atoms/nobia-icon/NobiaIcon";
import SecondaryButton from "../../atoms/button/SecondaryButton";
import { Brand, BrandCode, Environment } from "../../pages/StartPage";

const SLICE = window.innerWidth < 600 ? 3 : 12;
type DebouncedFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => ReturnType<T> | void;

const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): DebouncedFunction<T> => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function debouncedFunction(this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
interface IMenu {
  searchQuery: string;
  latestSearchQueries: string[];
  brand: Brand;
  environment: Environment | string;
  brands: Brand[];
  environments: Environment[];
  splitSearch: boolean;
  currentSearchIndex: number;
  onChangeBrand: (brandcode: BrandCode) => void;
  onChangeEnvironment: (env: Environment) => void;
  onChangeFreeTextSearchQuery: (query: string) => void;
  onChangeSearchQuery: (query: string, index?: number) => void;
  onChangeSplitSearch: (value: boolean) => void;
}

const Menu = ({
  searchQuery,
  latestSearchQueries,
  brand,
  environment,
  brands,
  environments,
  splitSearch,
  currentSearchIndex,
  onChangeBrand,
  onChangeEnvironment,
  onChangeFreeTextSearchQuery,
  onChangeSearchQuery,
  onChangeSplitSearch,
}: IMenu) => {
  const searchRef = useRef<any>(null);
  const firstLoad = useRef<number>(0);
  const [visibleValue, setVisibleValue] = useState(searchQuery);
  const [showWireframe, setShowWireframe] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [updateBrand, setUpdateBrand] = useState(false);
  const [updateEnvironment, setUpdateEnvironment] = useState(false);

  const debouncedOnChangeSearchQuery = debounce((value: string) => {
    onChangeFreeTextSearchQuery(value);
    // Perform search or other related actions here
  }, 400) as (value: string) => void;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedOnChangeSearchQuery(e.target.value);
    setVisibleValue(e.target.value);
  };

  useEffect(() => {
    setUpdateBrand(true);
    setTimeout(() => {
      setUpdateBrand(false);
    }, 300);
  }, [brand]);

  useEffect(() => {
    setUpdateEnvironment(true);
    setTimeout(() => {
      setUpdateEnvironment(false);
    }, 300);
  }, [environment]);

  useEffect(() => {
    if (firstLoad.current < 3) {
      setVisibleValue(searchQuery);
      firstLoad.current++;
    }
    if (searchRef.current !== document.activeElement) {
      setVisibleValue(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchRef.current]);

  return (
    <Container>
      <Wrapper>
        <Title onClick={() => setShowWireframe(!showWireframe)}>
          &#10003; Simply<Desktop>Projects</Desktop>
        </Title>
        <SearchContainer>
          <Search
            ref={searchRef}
            placeholder="Search"
            value={visibleValue}
            onChange={handleInputChange}
            type="search"
          />
          <MiniButton onClick={() => onChangeSplitSearch(!splitSearch)}>
            {splitSearch ? "Word search" : "Sentence search"}
          </MiniButton>
        </SearchContainer>
        <BrandSelect
          updateBrand={updateBrand}
          onChange={(e: any) => onChangeBrand(e.target.value)}
          value={brand.code}
        >
          {brands.map((b) => (
            <option key={b.code} value={b.code}>
              {b.code}
            </option>
          ))}
        </BrandSelect>
        <EnvironmentSelect
          updateEnvironment={updateEnvironment}
          onChange={(e: any) => onChangeEnvironment(e.target.value)}
          value={environment}
        >
          {environments.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </EnvironmentSelect>
        {latestSearchQueries && latestSearchQueries.length > 1 && (
          <Tags>
            <InnerTags>
              <TagRows>
                {/* eslint-disable-next-line */}
                {/* @ts-ignore */}
                {(showThree
                  ? latestSearchQueries.slice(
                      latestSearchQueries.length - SLICE
                    )
                  : latestSearchQueries
                ).map((lsq, i) => (
                  <Tag
                    // y = a * log(x) + b
                    opacity={
                      0.2 * Math.log((i + 1) / latestSearchQueries.length) + 1
                    }
                    isCurrent={lsq === searchQuery}
                    onClick={() => {
                      onChangeSearchQuery(lsq, i);
                    }}
                  >
                    {lsq}
                  </Tag>
                ))}
              </TagRows>
            </InnerTags>
            <Arrows>
              <Arrow
                onClick={() => {
                  if (currentSearchIndex > 0) {
                    onChangeSearchQuery(
                      latestSearchQueries[currentSearchIndex - 1],
                      currentSearchIndex - 1
                    );
                  }
                }}
              >
                &larr;
              </Arrow>
              {latestSearchQueries.length > SLICE && (
                <Arrow onClick={() => setShowThree(!showThree)}>
                  {showThree ? <>&darr;</> : <>&uarr;</>}
                </Arrow>
              )}
              <Arrow
                onClick={() => {
                  if (latestSearchQueries.length > currentSearchIndex + 1) {
                    onChangeSearchQuery(
                      latestSearchQueries[currentSearchIndex + 1],
                      currentSearchIndex + 1
                    );
                  }
                }}
              >
                &rarr;
              </Arrow>
            </Arrows>
          </Tags>
        )}
      </Wrapper>
      {showWireframe && (
        <Wireframe src={nobiaDxArchitecture} alt="nobia-dx-architecture" />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #222;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  display: grid;
  gap: 10px;

  grid-template-columns: 1fr 2fr 1fr 1fr;
  grid-template-areas:
    "title title brandselect environmentselect"
    "search search search search"
    "tags tags tags tags";
  padding: 12px;
  @media (min-width: 700px) {
    padding: 20px 20px 5px;
    grid-template-areas:
      "title . brandselect environmentselect"
      "search search search search"
      "tags tags tags tags";
  }
  @media (min-width: 1000px) {
    grid-template-columns: 2fr 5fr 1fr 1fr;
    grid-template-areas:
      "title search brandselect environmentselect"
      "tags tags tags tags";
  }
`;
const Title = styled.button`
  display: flex;
  text-align: left;
  align-items: center;
  background-color: inherit;
  color: inherit;
  border: none;
  margin: 0;
  cursor: pointer;
  white-space: nowrap;
  grid-area: title;
  padding: 2px;
  font-size: 16px;
  @media (min-width: 500px) {
    font-size: 24px;
    padding: 10px 2px;
  }
`;
const Search = styled.input`
  grid-area: search;
  border-radius: 6px 0 0 6px;
  padding: 5px;
  font-size: 16px;
  width: 100%;
  border-left: 1px solid white;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  outline: none;
  background-color: #222;
  color: #fff;
  ::placeholder {
    color: #ccc;
  }

  @media (min-width: 500px) {
    font-size: 18px;
    padding: 15px;
  }
  button {
    cursor: pointer;
  }
`;
const Select = styled.select`
  font-size: 16px;
  padding: 15px;
  appearance: none;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-transform: capitalize;
  text-align: center;
  @media (min-width: 500px) {
    font-size: 18px;
    padding: 15px;
  }
`;
const BrandSelect = styled(Select)<{ updateBrand: boolean }>`
  background-color: ${(p) => p.theme.colors.positiveGreen};
  grid-area: brandselect;
  transition: background-color 300ms ease;
  border: 1px solid ${(p) => p.theme.colors.positiveGreen};
  ${(p) =>
    p.updateBrand &&
    `
      background-color: ${p.theme.colors.neutralYellow};
      border: 1px solid ${p.theme.colors.neutralYellow};
    `};
`;
const EnvironmentSelect = styled(Select)<{ updateEnvironment: boolean }>`
  background-color: #777;
  border: 1px solid #777;
  grid-area: environmentselect;
  ${(p) =>
    p.updateEnvironment &&
    `
      background-color: ${p.theme.colors.neutralYellow};
      border: 1px solid ${p.theme.colors.neutralYellow};
    `};
`;
const SearchContainer = styled.div`
  grid-area: search;
  display: flex;
`;
const MiniButton = styled(SecondaryButton)`
  background-color: #222;
  border-right: 1px solid white;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  color: white;
  width: 140px;
  border-radius: 0 3px 3px 0;
  box-shadow: none;
  font-size: 12px;
  line-height: 14px;
  :hover {
    box-shadow: none;
  }
  :active {
    box-shadow: none;
    background-color: white;
    color: #222;
  }
`;
const Wireframe = styled.img`
  margin-bottom: 40px;
  width: 100%;
  max-width: 1360px;
  max-height: 70vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const Desktop = styled.span`
  display: none;
  @media (min-width: 600px) {
    margin-left: 5px;
    display: inline;
  }
`;
const Tags = styled.div`
  grid-area: tags;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const InnerTags = styled.div`
  overflow-x: scroll;
`;
const TagRows = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
  gap: 4px;
  margin: 10px 5px;
  @media (min-width: 600px) {
    gap: 10px;
    margin: 10px;
  }
`;
const Tag = styled.button<{
  isConnection?: boolean;
  opacity: number;
  isCurrent: boolean;
}>`
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 14px;
  background-color: black;
  color: white;
  border-radius: 3px;
  opacity: 0.6;
  padding: 5px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-transform: lowercase;
  cursor: pointer;
  white-space: nowrap;
  opacity: ${(p) => p.opacity};
  height: 28px;
  border: 1px solid white;
  ${(p) =>
    p.isCurrent &&
    `
        background-color: #d59112;
      `};

  ${(p) =>
    p.isConnection &&
    `
    background-color: #f0f;
    color: #fff;
    opacity: 1;
  `};
  :hover {
    text-decoration: underline;
  }
`;
const Arrow = styled.button`
  margin-top: 15px;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
const Arrows = styled.div`
  display: flex;
`;

export default Menu;
