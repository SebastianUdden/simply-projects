import { ICard } from "./molecules/card/Card";

export const uuidv4 = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (x) => {
    const random = (Math.random() * 16) | 0;
    const value = x === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
export const f = (obj: any) => ({ id: obj.id, title: obj.title });
export const formatLinks = (cards: ICard[]) => {
  return cards.map((c) => ({
    ...c,
    links: c.links
      ?.map((l) => {
        return {
          ...l,
        };
      })
      .filter(Boolean),
  }));
};

export const copyToClipboard = (value: string) => {
  const body = document.body;
  const storage = document.createElement("textarea");
  storage.value = value;
  body.appendChild(storage);

  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  body.removeChild(storage);
};
