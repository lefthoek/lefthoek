import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "flex",
  alignItems: ["center", "center"],
  bg: "accent",
  color: "text",
  h3: {
    maxWidth: ["25rem"],
  },
  h2: {
    maxWidth: "30rem",
  },
};

export const contentWrapperStyles: SxStyleProp = {
  display: "grid",
  maxWidth: "40rem",
  gridTemplateColumns: ["auto", "1fr"],
};
