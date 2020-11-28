import {text, fonts} from "./typography";
import {styles} from "./styles";
import {cards} from "./cards";
import {buttons} from "./buttons";
import {forms} from "./forms";
import {gradients, colors, primaryColors} from "./colors";

export const base = {
  gradients,
  space: [
    0,
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
    "8rem",
  ],
  shadows: {
    simple: "0px 40px 80px rgba(217, 201, 205, 0.3);",
    skyBlue: "0px 40px 80px #6E3CFF",
    brightGreen: "0px 40px 80px rgba(129, 232, 185, 0.6)",
    lobster: "0px 40px 80px rgba(202, 69, 0, 0.6)",
    midnight: "0px 40px 80px rgba(51, 51, 69, 0.2);",
  },
  radii: {
    default: "20px",
    avatar: "0.25rem",
  },
  breakpoints: ["40rem", "64rem", "100rem"],
  fontSizes: [12, 14, 16, 18, 24, 34, 42, 60, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 600,
  },
  forms,
  fonts,
  text,
  cards,
  buttons,
  primaryColors,
  colors,
  styles,
};

export default base;
