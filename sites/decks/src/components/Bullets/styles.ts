import { text } from "@lefthoek/ui-theme/src/typography";

const outerWrapper = {
  display: "grid",
  p: "1rem",
  maxWidth: ["100%", "80%", "80%", "64rem"],
  alignContent: "center",
  strong: {
    color: "secondary",
  },
  "> h2": {
    ...text.heading,
  },
  "> ul > li > p": {
    ...text.body,
  },
};

export { outerWrapper };
