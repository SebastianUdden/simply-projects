const createFontFace = (
  name: string,
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700,
  fonts: { format: string; url: string }[]
) => `
      @font-face {
          font-family: '${name}';
          src: ${fonts
            .map((f) => `url(${f.url}) format('${f.format}')`)
            .join(",")};
          font-weight: ${weight};
          font-display: swap;
      }
  `;

//////////
// JEWELS

const jewelFontUrlCloudinary =
  "https://res.cloudinary.com/dgg9enyjv/raw/upload/v1651582419/Invita/fonts/";
export const JewelBaseFontName = "Jewel-base";
export const JewelHeaderFontName = "Jewel-header";

const jewelLightFont = createFontFace(JewelBaseFontName, 300, [
  {
    format: "woff2",
    url: `${jewelFontUrlCloudinary}/lausanne/TWKLausanne-350.woff2`,
  },
  {
    format: "woff",
    url: `${jewelFontUrlCloudinary}/lausanne/TWKLausanne-350.woff`,
  },
]);
const jewelNormalFont = createFontFace(JewelBaseFontName, 400, [
  {
    format: "woff2",
    url: `${jewelFontUrlCloudinary}/lausanne/TWKLausanne-350.woff2`,
  },
  {
    format: "woff",
    url: `${jewelFontUrlCloudinary}/lausanne/TWKLausanne-350.woff`,
  },
]);
const jewelBoldFont = createFontFace(JewelBaseFontName, 700, [
  {
    format: "woff2",
    url: `${jewelFontUrlCloudinary}/lausanne/TWKLausanne-650.woff2`,
  },
  {
    format: "woff",
    url: `${jewelFontUrlCloudinary}/lausanne/TWKLausanne-650.woff`,
  },
]);
const jewelHeaderFont = createFontFace(JewelHeaderFontName, 700, [
  {
    format: "woff2",
    url: `${jewelFontUrlCloudinary}/reckless/RecklessNeue-Regular.woff2`,
  },
  {
    format: "woff",
    url: `${jewelFontUrlCloudinary}/reckless/RecklessNeue-Regular.woff`,
  },
]);
export const JewelFonts = [
  jewelLightFont,
  jewelNormalFont,
  jewelBoldFont,
  jewelHeaderFont,
];
