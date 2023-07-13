import styled from "styled-components";
import Cards from "../organisms/cards/Cards";
import { ICard } from "../molecules/card/Card";
import { useEffect, useState } from "react";
import { formatLinks } from "../utils";
import Menu from "../organisms/menu/Menu";
import Loader from "../molecules/loader/Loader";
import { IList } from "../data/lists";

export type Environment = "dev" | "test" | "stage" | "prod";

const MAX_COUNT = 17;
const environments: Environment[] = ["dev", "test", "stage", "prod"];
const searchTips = [
  "simply",
  "github",
  "netlify",
  "apps",
  "apis",
  "documentation",
];

interface IStartPage {
  lists: IList[];
}

const StartPage = ({ lists }: IStartPage) => {
  const [showLoader, setShowLoader] = useState(true);
  const [showAllTags, setShowAllTags] = useState(false);
  const [splitSearch, setSplitSearch] = useState(true);
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  const [latestSearchQueries, setLatestSearchQueries] = useState<string[]>([]);
  const [lastWasFreeText, setLastWasFreeText] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleFreeTextSearch = (value: string) => {
    setSplitSearch(true);
    if (lastWasFreeText) {
      const newArray = [
        ...latestSearchQueries.slice(0, latestSearchQueries.length - 1),
        value,
      ];
      setLatestSearchQueries(newArray);
      setCurrentSearchIndex(newArray.length - 1);
    } else {
      const newArray = [...latestSearchQueries, value];
      setLatestSearchQueries(newArray);
      setCurrentSearchIndex(newArray.length - 1);
    }
    setSearchQuery(value);
    setLastWasFreeText(true);
  };
  const handleSearch = (value: string, index?: number) => {
    setLastWasFreeText(false);
    setSplitSearch(false);
    setSearchQuery(value);
    const elIndex = latestSearchQueries.findIndex((x) => x === value);
    let newArray = [];
    if (elIndex === -1) {
      newArray = [...latestSearchQueries, value];
    } else {
      newArray = latestSearchQueries;
    }
    setLatestSearchQueries(
      newArray.length > MAX_COUNT ? newArray.slice(1) : newArray
    );
    setCurrentSearchIndex(index === undefined ? newArray.length - 1 : index);
  };
  const handleShowAllTags = () => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("t", (!showAllTags).toString());
    urlParams.set(
      "search",
      // @ts-ignore
      typeof searchQuery === "string" ? searchQuery : searchQuery.join("%20")
    );
    window.location.search = urlParams.toString();
  };

  useEffect(() => {
    const searchParams = window.location.search;
    const newSearch = searchParams.split("search=").pop()?.split("&")[0];
    if (searchParams.includes("search=") && newSearch) {
      setSearchQuery(
        newSearch
          .split("%20")
          .join(" ")
          .split("+")
          .join(" ")
          .split("%2C")
          .join(" ")
          .split("%2520")
          .join(" ")
      );
    }
    const showAllTags = searchParams.split("t=").pop()?.split("&")[0];
    if (searchParams.includes("t=") && showAllTags) {
      setShowAllTags(showAllTags === "true");
    }
  }, []);

  const query = splitSearch ? searchQuery.split(" ") : searchQuery;
  const allCards = [...lists.map((l: any) => l.list).flat()];
  const allTags = [...new Set(allCards.map((c) => c.tags).flat())].sort();
  return (
    <>
      <Menu
        searchQuery={searchQuery}
        latestSearchQueries={latestSearchQueries}
        currentSearchIndex={currentSearchIndex}
        splitSearch={splitSearch}
        onChangeFreeTextSearchQuery={handleFreeTextSearch}
        onChangeSearchQuery={handleSearch}
        onChangeSplitSearch={(x) => setSplitSearch(x)}
      />
      {showLoader && <Loader onFinishLoading={() => setShowLoader(false)} />}
      <Wrapper>
        <Tags>
          <GreenTag opacity={1} isCurrent onClick={handleShowAllTags}>
            Show {showAllTags ? "fewer tags" : "all tags"}
          </GreenTag>
          {(showAllTags ? allTags : searchTips).map((st) => (
            <Tag
              opacity={1}
              isCurrent={st === searchQuery}
              onClick={() => {
                st && handleSearch(st);
              }}
            >
              {st}
            </Tag>
          ))}
        </Tags>
        {!searchQuery && (
          <P>
            Below is an{" "}
            <strong>
              overview of all {lists.reduce((a, b) => a + b.list.length, 0)}
              'cards'
            </strong>{" "}
            that are connected to <strong>projects I've worked on</strong>.
            These include{" "}
            <strong>
              applications, application programming interfaces, gists, platforms
              etc.
            </strong>{" "}
            that exists within and surrounding my workflow.
          </P>
        )}

        <Grid>
          {lists.map((l: IList) => (
            <Cards
              title={l.title}
              subtitle={l.subtitle}
              cards={l.list}
              searchQuery={query}
              onSearch={handleSearch}
              allCards={allCards}
            />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;
const Grid = styled.div`
  display: grid;
  padding: 0 20px;
  gap: 20px;
  grid-template-columns: 1fr;
  max-width: 100%;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    max-width: 1400px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const P = styled.p`
  margin-top: 20px;
  font-size: 20px;
  max-width: 1400px;
  padding: 20px;
  color: #999;
  strong {
    font-weight: 700;
    color: #000;
  }
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  margin: 10px;
  @media (min-width: 600px) {
    gap: 10px;
    margin: 20px;
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
  opacity: ${(p) => p.opacity};
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
const GreenTag = styled(Tag)`
  background-color: ${(p) => p.theme.colors.positiveGreen};
`;

export default StartPage;
