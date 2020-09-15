import { gradients } from "./colors";

const base = {
  display: "grid",
  userSelect: "none",
  p: "2rem",
  width: "100%",
  minWidth: ["auto", "20rem"],
  maxWidth: ["90vw", "30rem", "40rem"],
  bg: gradients.skyBlue[1],
  color: gradients.brightGreen[0],
  boxShadow: "skyBlue",
  borderRadius: "default",
  gridRowGap: 5,
};

export const cards = {
  primary: base,
  skyBlue: base,
  brightGreen: {
    ...base,
    bg: gradients.brightGreen[1],
    boxShadow: "0px 40px 80px rgba(129, 232, 185, 0.6)",
    color: "text",
  },
  midnight: {
    ...base,
    color: gradients.skyBlue[0],
    boxShadow: "0px 40px 80px rgba(51, 51, 69, 0.2);",
    bg: gradients.midnight[2],
  },
  lobster: {
    ...base,
    color: "muted",
    boxShadow: "0px 40px 80px rgba(202, 69, 0, 0.6)",
    bg: gradients.lobster[1],
  },
};
