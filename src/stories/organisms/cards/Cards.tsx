import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../../atoms/button/PrimaryButton";
import SecondaryButton from "../../atoms/button/SecondaryButton";
import TertiaryButton from "../../atoms/button/TertiaryButton";
import Card, { Connection, ICard } from "../../molecules/card/Card";

const sort: any = {
  ascending: (a: ICard, b: ICard) => {
    if (a.title < b.title) return 1;
    if (a.title > b.title) return -1;
    return 0;
  },
  descending: (a: ICard, b: ICard) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  },
};

const matchCard = (card: ICard, searchQuery: string) => {
  const { links, connectionsDown, connectionsUp, ...adjustedCard } = card;
  const cardString = JSON.stringify(adjustedCard);
  if (cardString.toLowerCase().includes(searchQuery.toLowerCase())) return true;
  return false;
};

interface ICards {
  title: string;
  subtitle: string;
  cards: ICard[];
  allCards: ICard[];
  searchQuery: string | string[];
  onSearch?: (value: string) => void;
}

const getBgColor = (lvl: number, original?: string, card?: string) => {
  if (lvl === 1) return "#222";
  if (original === card) return "magenta";
  return card;
};

const getTreeView = (
  lvl = 1,
  allCards: ICard[],
  card?: ICard,
  originalColor?: string
): any => {
  if (!card || lvl > 5) return null;
  if (
    (card &&
      (card.connectionsDown === undefined ||
        card.connectionsUp === undefined)) ||
    (card.connectionsDown.length === 0 && card.connectionsUp.length === 0)
  )
    return null;
  return {
    id: card.id,
    title: card.title,
    color: card.bgColor === originalColor ? "#fff" : "#222",
    bgColor: getBgColor(lvl, originalColor, card.bgColor),
    fontSize: window.innerWidth < 600 ? 15 : 20,
    connectionsUp: card.connectionsUp.map((c: Connection) =>
      getTreeView(
        lvl + 1,
        allCards,
        allCards.find((ac) => ac.id === c.id),
        originalColor
      )
    ),
    connectionsDown: card.connectionsDown.map((c: Connection) =>
      getTreeView(
        lvl + 1,
        allCards,
        allCards.find((ac) => ac.id === c.id),
        originalColor
      )
    ),
  };
};
const checkIsSpecific = (
  matchingCards: ICard[],
  searchQuery: string | string[]
) => {
  if (matchingCards.length === 1) {
    return matchingCards[0];
  }
  if (Array.isArray(searchQuery)) {
    return null;
  }
  return matchingCards.find(
    (c) => c.title.toLowerCase() === searchQuery.toLowerCase()
  );
};

const Cards = ({
  title,
  subtitle,
  cards,
  allCards,
  searchQuery,
  onSearch,
}: ICards) => {
  const [selectedSorting, setSelectedSorting] = useState("descending");
  const [openAll, setOpenAll] = useState(false);

  useEffect(() => {
    const searchParams = window.location.search;
    const open = searchParams.split("open=").pop()?.split("&")[0];
    const hasOpen = searchParams.includes("open=");
    if (hasOpen && open === "true") {
      setOpenAll(true);
    } else if (hasOpen && open === "false") {
      setOpenAll(false);
    }
  }, [searchQuery]);

  const handleOpenClose = () => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("open", (!openAll).toString());
    urlParams.set(
      "search",
      typeof searchQuery === "string" ? searchQuery : searchQuery.join("%20")
    );
    window.location.search = urlParams.toString();
  };

  const matchingCards = cards.filter((c) => {
    if (Array.isArray(searchQuery)) {
      return searchQuery.every((q) => matchCard(c, q));
    }
    return matchCard(c, searchQuery);
  });

  const specificCard = checkIsSpecific(matchingCards, searchQuery);

  return matchingCards.length !== 0 ? (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>
        {subtitle} ({matchingCards.length})
      </Subtitle>
      <Grid>
        {specificCard ? (
          <Card
            {...specificCard}
            searchQuery={
              Array.isArray(searchQuery) ? searchQuery.join(" ") : searchQuery
            }
            onSearch={onSearch}
            isOpen={true}
            treeView={getTreeView(
              1,
              allCards,
              specificCard,
              specificCard.bgColor
            )}
          />
        ) : (
          <>
            <Sorting>
              {selectedSorting === "ascending" ? (
                <PrimaryButton wide>A-Z &uarr;</PrimaryButton>
              ) : (
                <SecondaryButton
                  wide
                  onClick={() => setSelectedSorting("ascending")}
                >
                  A-Z &uarr;
                </SecondaryButton>
              )}
              {selectedSorting === "descending" ? (
                <PrimaryButton wide>A-Z &darr;</PrimaryButton>
              ) : (
                <SecondaryButton
                  wide
                  onClick={() => setSelectedSorting("descending")}
                >
                  A-Z &darr;
                </SecondaryButton>
              )}
              <TertiaryButton onClick={handleOpenClose}>
                {openAll ? "Close" : "Open"} all
              </TertiaryButton>
            </Sorting>
            {matchingCards.sort(sort[selectedSorting]).map((card) => (
              <React.Fragment key={card.title}>
                <Card
                  {...card}
                  searchQuery={
                    Array.isArray(searchQuery)
                      ? searchQuery.join(" ")
                      : searchQuery
                  }
                  onSearch={onSearch}
                  isOpen={openAll}
                />
              </React.Fragment>
            ))}
          </>
        )}
      </Grid>
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  max-width: 500px;
`;
const Grid = styled.div`
  display: grid;
  gap: 10px;
`;
const Sorting = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  button {
    white-space: nowrap;
  }
`;
const Title = styled.h2`
  margin: 20px 0 0;
`;
const Subtitle = styled.p`
  margin: 10px 0 20px;
  opacity: 0.3;
`;

export default Cards;
