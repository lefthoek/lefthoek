import { text, fonts } from "./typography";
import { styles } from "./styles";
import { cards } from "./cards";
import { buttons } from "./buttons";
import { colors, primaryColors } from "./colors";

export const base = {
  space: [
    0,
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "6rem",
    "8rem",
  ],
  breakpoints: ["40rem", "64rem", "100rem"],
  fontSizes: [14, 16, 18, 20, 24, 34, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    subHeading: 2,
  },
  fonts,
  text,
  cards,
  buttons,
  primaryColors,
  colors,
  styles,
};

export default base;
