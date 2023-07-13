import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { copyToClipboard } from "../../utils";
import TreeView, { ITreeView } from "../tree-view/TreeView";

const byTitle = (a: Connection, b: Connection) => {
  if (a.title > b.title) return 1;
  if (a.title < b.title) return -1;
  return 0;
};

const getSearchView = (string?: string, query?: string) => {
  if (!string) return undefined;
  if (!query) return string;
  const pattern = new RegExp(query, "i");
  const split = string.split(pattern);
  if (split.length < 2) return string;
  return (
    <>
      {split[0]}
      <Em>{query}</Em>
      {split[1]}
    </>
  );
};

const Em = styled.strong`
  background-color: #ffffffbb;
  color: #c700a2;
  border-radius: 3px;
  padding: 2px 0;
  weight: 700;
`;

export type Connection = {
  id: string;
  title: string;
};

type Link = {
  url: string;
  label: string;
};

export interface ICard {
  id?: string;
  title: string;
  description?: string;
  links?: Link[];
  tags?: string[];
  connectionsUp: Connection[];
  connectionsDown: Connection[];
  color?: string;
  bgColor?: string;
  isOpen?: boolean;
  treeView?: ITreeView;
  searchQuery?: string;
  onSearch?: (value: string) => void;
}

const Card = ({
  title,
  description,
  links,
  tags,
  connectionsUp,
  connectionsDown,
  color,
  bgColor,
  isOpen,
  treeView,
  searchQuery,
  onSearch,
}: ICard) => {
  const [expand, setExpand] = useState(false);
  const cardTitle = getSearchView(title, searchQuery);

  const handleShare = () => {
    copyToClipboard(`${location.origin}?search=${title.replace(" ", "%20")}`);
  };

  useEffect(() => {
    setExpand(!!isOpen);
  }, [isOpen]);

  return (
    <Wrapper color={color} bgColor={bgColor}>
      <Row>
        <Title
          onClick={(e) => {
            setExpand(true);
            onSearch && onSearch(title);
          }}
        >
          {cardTitle}
        </Title>
        <Expand onClick={() => setExpand(true)}></Expand>
        <Share onClick={handleShare}>Copy link</Share>
      </Row>
      {expand && (
        <>
          <Line />
          {tags && tags.length > 0 && (
            <Tags>
              {tags.sort().map((tag) => (
                <Tag
                  key={tag}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSearch && onSearch(tag);
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </Tags>
          )}
          <Description>{getSearchView(description, searchQuery)}</Description>
          {links && links.length > 0 && (
            <>
              <Strong>Links</Strong>
              <Tags>
                {links.sort().map((link) => (
                  <TagLink
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </TagLink>
                ))}
              </Tags>
            </>
          )}
          {((connectionsUp && connectionsUp.length > 0) ||
            (connectionsDown && connectionsDown.length > 0)) &&
            !treeView && (
              <>
                <Strong>Connections</Strong>
                <Tags>
                  {[...(connectionsUp ?? []), ...(connectionsDown ?? [])]
                    .sort(byTitle)
                    .map((connection) => (
                      <Tag
                        key={connection.title}
                        isConnection
                        onClick={(e) => {
                          e.stopPropagation();
                          onSearch && onSearch(connection.title);
                        }}
                      >
                        {connection.title}
                      </Tag>
                    ))}
                </Tags>
              </>
            )}
        </>
      )}
      {treeView && (
        <>
          <TreeViewTitle>Connections</TreeViewTitle>
          <Container>
            <div>
              <TreeView
                {...treeView}
                isFirst={true}
                onClick={(title) => onSearch && onSearch(title)}
              />
            </div>
          </Container>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ color?: string; bgColor?: string }>`
  text-align: left;
  border: none;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${(p) => p.bgColor || "white"};
  color: ${(p) => p.color || "black"};
  font-size: 16px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Share = styled.button`
  padding: 8px;
  background-color: inherit;
  color: #666;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  :active {
    color: #000;
    opacity: 0.5;
  }
`;

const Title = styled.button`
  background-color: inherit;
  border: none;
  padding: 0;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  :active {
    opacity: 0.6;
  }
`;
const Description = styled.div`
  font-size: 16px;
  margin: 5px 0 5px;
  font-size: 14px;
  opacity: 0.5;
`;
const Line = styled.hr``;
const TagLink = styled.a`
  border: none;
  background-color: teal;
  color: white;
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-transform: lowercase;
  text-decoration: none;
  cursor: pointer;
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Tag = styled.button<{ isConnection?: boolean }>`
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 12px;
  background-color: black;
  color: orange;
  border-radius: 3px;
  opacity: 0.6;
  padding: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-transform: lowercase;
  cursor: pointer;
  ${(p) =>
    p.isConnection &&
    `
    background-color: #f0f;
    color: #fff;
    opacity: 1;
  `}
`;
const Strong = styled.p`
  margin: 12px 0 5px;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.4;
`;
const TreeViewTitle = styled(Strong)`
  border-bottom: 1px solid #222;
  opacity: 0.4;
  margin-bottom: 6px;
`;
const BrandButton = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  :hover {
    text-decoration: underline;
  }
  :active {
    opacity: 0.5;
  }
`;
const Expand = styled.button`
  color: inherit;
  background-color: inherit;
  outline: none;
  cursor: pointer;
  border: none;
  flex-grow: 1;
`;
const Container = styled.div`
  overflow-x: scroll;
  max-width: 85vw;
`;

export default Card;
