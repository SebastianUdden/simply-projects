import { ICard } from "./molecules/card/Card";
import { Brand } from "./pages/StartPage";

const badaSuffix: any = {
  hthde: "treffen-vereinbaren",
  hthdk: "designmoede",
  hthno: "avtal-mote",
  invita: "book-designmode",
  keittiomaailma: "varaa-suunnitteluaika",
  novart: "varaa-suunnitteluaika",
  norema: "avtal-mote",
  unoform: "aftal-moede",
  unoformbe: "vraag-een-gesprek-aan",
  unoformno: "avtal-mote",
  unoformse: "boka-mote",
};

const mpSuffix: any = {
  magnet: "my-project",
  marbodal: "mitt-marbodal",
};

export const uuidv4 = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (x) => {
    const random = (Math.random() * 16) | 0;
    const value = x === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
export const f = (obj: any) => ({ id: obj.id, title: obj.title });
export const formatLinks = (
  cards: ICard[],
  brand: Brand,
  environment: string
) => {
  return cards.map((c) => ({
    ...c,
    links: c.links
      ?.map((l) => {
        if (l.url.includes("BRAND") && !c.brandsUsing?.includes(brand.code))
          return false;
        return {
          ...l,
          url: l.url
            .replace("{BRAND}", brand.code)
            .replace("{BRAND_EPI_URL}", brand.epiUrl)
            .replace("{BRAND_ECOM_URL}", brand.ecomUrl)
            .replace("{BRAND_URL}", brand.url)
            .replace("{BADA_SUFFIX}", badaSuffix[brand.code])
            .replace("{MP_SUFFIX}", mpSuffix[brand.code])
            .replace("{ENV}", environment === "prod" ? "" : `${environment}.`),
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
