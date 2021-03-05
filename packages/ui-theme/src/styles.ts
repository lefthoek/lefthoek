import {text} from "./typography";

export const styles = {
  root: {...text.body, bg: "text"},
  h1: {...text.display, m: 0, mb: 6},
  h2: {
    textAlign: "center",
    ...text.eyelet,
    mt: [8, 9],
  },
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
  p: {...text.body, mb: 4},
  ul: {
    listStyleType: "'»'",
    p: 0,
    my: 5,
    mx: 3,
  },
  ol: {
    my: 5,
    p: 0,
    mx: 3,
  },
  li: {
    listStylePosition: "outside",
    mx: [0, 6],
    "::marker": {
      color: "secondary",
    },
    "> p": {
      my: 0,
      position: "relative",
      textAlign: "left",
      left: "0.5rem",
    },
  },
  blockquote: {
    p: {
      ...text.body,
      fontFamily: "monospace",
    },
    textAlign: "center",
    mb: 7,
  },
  a: {
    color: "text",
    textDecorationThickness: "0.1rem",
    textUnderlineOffset: "1.5px",
  },
  pre: {
    p: 6,
    bg: "black",
    mb: 4,
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
  img: {
    maxWidth: "100vw",
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    mx: "-50vw",
    mt: [0, 4, 5],
    zIndex: -1,
  },
  "img + span": {
    color: "red",
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
};
