import { text } from "@lefthoek/ui-theme/src/typography";
import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "grid",
  p: "1rem",
  alignContent: "center",
  justifyItems: "center",
};

export const headerStyles: SxStyleProp = {
  maxWidth: "18rem",
  mb: [3, 5],
  "> h2": {
    ...text.eyelet,
    textAlign: "center",
  },
};

export const statsWrapperStyles: SxStyleProp = {
  display: ["flex"],
  justifyItems: ["stretch"],
  minWidth: ["80vw"],
  transform: ["scale(0.65)", "scale(0.8)", "none"],
  maxHeight: ["60vh"],
  "> ul": {
    m: [0],
    p: [0],
    textIndent: [0],
    listStyleType: [0],
    display: ["flex"],
    flex: 1,
    justifyContent: ["center", "center", "center", "space-between"],
    alignItems: ["center", "center", "center", "flex-start"],
    flexDirection: ["column", "column", "column", "row"],
  },
};
