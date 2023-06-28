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

export type BrandCode =
  | "ewe"
  | "hthbe"
  | "hthde"
  | "hthdk"
  | "hthno"
  | "hthse"
  | "intuo"
  | "invita"
  | "keittiomaailma"
  | "magnet"
  | "magnettrade"
  | "marbodal"
  | "norema"
  | "novart"
  | "onehth"
  | "sentens"
  | "sigdal"
  | "unoformcom"
  | "unoform"
  | "unoformno"
  | "unoformse";

export type Brand = {
  code: BrandCode;
  epiUrl: string;
  ecomUrl: string;
  url: string;
};

const brands: Brand[] = [
  { code: "ewe", epiUrl: "ewe", ecomUrl: "", url: "" },
  { code: "hthbe", epiUrl: "hth-web", ecomUrl: "", url: "www.hth.be" },
  { code: "hthde", epiUrl: "hth-web", ecomUrl: "", url: "www.hth.de" },
  { code: "hthdk", epiUrl: "hth-web", ecomUrl: "e-shop", url: "www.hth.dk" },
  {
    code: "hthno",
    epiUrl: "hth-web-no",
    ecomUrl: "nettbutikk",
    url: "www.hth.no",
  },
  { code: "hthse", epiUrl: "hth-web-se", ecomUrl: "e-shop", url: "www.hth.se" },
  { code: "intuo", epiUrl: "intuo", ecomUrl: "", url: "" },
  { code: "invita", epiUrl: "invita", ecomUrl: "", url: "" },
  { code: "keittiomaailma", epiUrl: "keittiomaailma", ecomUrl: "", url: "" },
  { code: "magnet", epiUrl: "magnet", ecomUrl: "", url: "" },
  { code: "magnettrade", epiUrl: "magnettrade", ecomUrl: "", url: "" },
  { code: "marbodal", epiUrl: "marbodal", ecomUrl: "", url: "" },
  { code: "norema", epiUrl: "norema", ecomUrl: "", url: "" },
  { code: "novart", epiUrl: "novart", ecomUrl: "", url: "" },
  { code: "onehth", epiUrl: "onehth", ecomUrl: "", url: "" },
  { code: "sentens", epiUrl: "sentens", ecomUrl: "", url: "" },
  { code: "sigdal", epiUrl: "sigdal", ecomUrl: "", url: "" },
  { code: "unoformcom", epiUrl: "unoformcom", ecomUrl: "", url: "unoform.com" },
  { code: "unoform", epiUrl: "unoform", ecomUrl: "", url: "unoform.dk" },
  { code: "unoformno", epiUrl: "unoformno", ecomUrl: "", url: "unoform.no" },
  { code: "unoformse", epiUrl: "unoformse", ecomUrl: "", url: "unoform.se" },
];

interface IStartPage {
  lists: IList[];
  // apis: ICard[];
  // serviceBus: ICard[];
  // thirdParty: ICard[];
  // sap: ICard[];
  // mainSites: ICard[];
  // infra: ICard[];
}

const StartPage = ({
  lists,
}: // apis: apisIn,
// serviceBus: serviceBusIn,
// thirdParty: thirdPartyIn,
// sap: sapIn,
// mainSites: mainSitesIn,
// infra: infraIn,
IStartPage) => {
  const [showLoader, setShowLoader] = useState(true);
  const [showAllTags, setShowAllTags] = useState(false);
  const [splitSearch, setSplitSearch] = useState(true);
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  const [latestSearchQueries, setLatestSearchQueries] = useState<string[]>([]);
  const [lastWasFreeText, setLastWasFreeText] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [brand, setBrand] = useState<Brand>(
    brands.find((b) => b.code === localStorage.getItem("brandcode")) ||
      brands[0]
  );
  const [environment, setEnvironment] = useState<Environment | string>(
    localStorage.getItem("env") || environments[0]
  );
  // const [apps, setApps] = useState<ICard[]>([]);
  // const [apis, setApis] = useState<ICard[]>([]);
  // const [serviceBus, setServiceBus] = useState<ICard[]>([]);
  // const [thirdParty, setThirdParty] = useState<ICard[]>([]);
  // const [sap, setSap] = useState<ICard[]>([]);
  // const [mainSites, setMainSites] = useState<ICard[]>([]);
  // const [infra, setInfra] = useState<ICard[]>([]);

  const handleBrandUpdate = (brandCode: BrandCode) => {
    setSplitSearch(true);
    localStorage.setItem("brandcode", brandCode);
    setBrand(brands.find((b) => b.code === brandCode) || brands[0]);
    if (searchQuery.includes(brandCode)) return;
    brands.forEach((b) => {
      if (searchQuery.includes(b.code)) {
        setSearchQuery(searchQuery.replace(b.code, brandCode));
      }
    });
    if (!brands.some((b) => searchQuery.includes(b.code))) {
      setSearchQuery(`${searchQuery ? `${searchQuery} ` : ""}${brandCode}`);
    }
  };
  const handleEnvironmentUpdate = (env: Environment) => {
    localStorage.setItem("env", env);
    setEnvironment(env);
  };
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

  // useEffect(() => {
  //   // ts-ignore reason: formatLinks filters on boolean, links will never contain them
  //   // @ts-ignore
  //   setApps(formatLinks(appsIn, brand, environment));
  //   // @ts-ignore
  //   setApis(formatLinks(apisIn, brand, environment));
  //   // @ts-ignore
  //   setServiceBus(formatLinks(serviceBusIn, brand, environment));
  //   // @ts-ignore
  //   setThirdParty(formatLinks(thirdPartyIn, brand, environment));
  //   // @ts-ignore
  //   setSap(formatLinks(sapIn, brand, environment));
  //   // @ts-ignore
  //   setMainSites(formatLinks(mainSitesIn, brand, environment));
  //   // @ts-ignore
  //   setInfra(formatLinks(infraIn, brand, environment));
  // }, [brand, environment]);
  // apis.length +
  // thirdParty.length +
  // sap.length +
  // mainSites.length +
  // infra.length

  const query = splitSearch ? searchQuery.split(" ") : searchQuery;
  const allCards = [
    ...lists.map((l: any) => l.list).flat(),
    // ...apis,
    // ...thirdParty,
    // ...sap,
    // ...mainSites,
    // ...infra,
  ];
  const allTags = [...new Set(allCards.map((c) => c.tags).flat())].sort();
  return (
    <>
      <Menu
        searchQuery={searchQuery}
        latestSearchQueries={latestSearchQueries}
        currentSearchIndex={currentSearchIndex}
        brand={brand}
        environment={environment}
        brands={brands}
        environments={environments}
        splitSearch={splitSearch}
        onChangeBrand={handleBrandUpdate}
        onChangeEnvironment={handleEnvironmentUpdate}
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
              overview of all {lists.reduce((a, b) => a + b.list.length, 0)}{" "}
              'cards' that are connected to projects I've worked on. These
              include applications, application programming interfaces, gists,
              platforms etc.
            </strong>{" "}
            that exists within and surrounding my workflow. The content is{" "}
            <strong>searchable by the top bar</strong>, you can also{" "}
            <strong>change brand and environment</strong> to update the dynamic
            links for each card.
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
              onChangeBrand={handleBrandUpdate}
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
