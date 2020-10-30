import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  bg: ["muted"],
  color: "text",
  px: [5, 5, 7],
  alignItems: ["center", "center"],
  h2: {
    maxWidth: "30rem",
  },
  ".innerWrapper": {
    maxWidth: "80rem",
  },
};

export const contentWrapperStyles: SxStyleProp = {
  display: "grid",
  gridGap: [4],
  maxWidth: "45rem",
  gridTemplateColumns: ["auto", "1fr"],
}

