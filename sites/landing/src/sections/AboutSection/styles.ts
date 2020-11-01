import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  bg: "accent",
  color: "text",
  px: [6, 6, 7],
  alignItems: ["center", "center"],
  h2: {
    maxWidth: "30rem",
  },
  ".innerWrapper": {
    maxWidth: "80rem",
    borderBottomLeftRadius: "4px",
  },
};

export const contentWrapperStyles: SxStyleProp = {
  display: "grid",
  gridGap: [4],
  maxWidth: "40rem",
  gridTemplateColumns: ["auto", "1fr"],
};
