import { text } from "./typography";

export const styles = {
  root: text.body,
  h1: text.displayText,
  h2: text.extraLargeHeading,
  h3: text.largeHeading,
  h4: text.heading,
  h5: text.smallHeading,
  h6: {
    ...text.sectionHeading,
    color: "primary",
    borderBottom: "1px solid lightgray",
    borderColor: "muted",
    pb: 2,
  },
  p: text.body,
  a: {
    color: "primary",
  },
  pre: {
    fontFamily: "monospace",
    overflowX: "auto",
    code: {
      color: "inherit",
    },
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  img: {
    maxWidth: "100%",
  },
};
