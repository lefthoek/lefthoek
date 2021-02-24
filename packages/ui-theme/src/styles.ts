import {text} from "./typography";
import {Theme} from "@lefthoek/types";

export const styles = {
  root: {...text.body, bg: "text"},
  h1: {...text.display, m: 0, mb: 6},
  h2: {...text.eyelet, m: 0, mb: 4, mt: 6},
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
    my: 6,
    p: 0,
    mx: 3,
  },
  ol: {
    my: 6,
    p: 0,
    mx: 3,
  },
  li: {
    listStylePosition: "outside",
    "::marker": {
      color: "secondary",
    },
    mb: 3,
    "> p": {
      position: "relative",
      textAlign: "left",
      left: "1rem",
    },
  },
  blockquote: {
    "&:first-of-type": {
      textAlign: "right",
      px: [0],
    },
    m: 0,
    my: [4, 4],
    px: [4, 6],
    color: ({gradients}: Theme) => gradients["midnight"][2],
    "> p": {
      margin: 0,
      "&:last-child": {
        mt: [2],
      },
    },
  },
  a: {
    color: ({gradients}: Theme) => gradients["skyBlue"][3],
    textDecoration: "none",
    "&:hover": {
      color: ({gradients}: Theme) => gradients["skyBlue"][1],
    },
    "&:active": {},
    "&:visited": {},
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
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  img: {
    maxWidth: "100%",
  },
};
