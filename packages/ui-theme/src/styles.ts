import { text } from "./typography";

export const styles = {
  root: text.body,
  h1: { ...text.display, m: 0, mb: 6 },
  h2: { ...text.eyelet, m: 0, mb: 4 },
  h3: text.title,
  h4: text.title,
  h5: text.abstract,
  h6: {
    ...text.titoletto,
    color: "primary",
    borderBottom: "1px solid lightgray",
    borderColor: "muted",
    pb: 2,
  },
  p: { ...text.body, mb: 4 },
  ul: {
    listStyle: "square",
    p: 0,
    m: 0,
  },
  li: {
    p: {
      textAlign: "left",
    },
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
