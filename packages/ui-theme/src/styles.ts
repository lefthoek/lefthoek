import { text } from "./typography";

export const styles = {
  root: text.body,
  h1: { ...text.displayText, m: 0, mb: 6 },
  h2: { ...text.extraLargeHeading, m: 0, mb: 4 },
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
  p: { ...text.body, mb: 4 },
  ul: {
    listStyle: "none",
    m: 0,
    p: 0,
  },
  li: {
    mb: 4,
  },
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
