/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const comp = (as = "div", sx: any) => (props: any) => {
  return <Box as={as} sx={sx} {...props} />;
};

const blockquoteStyles = {
  "&:first-of-type": {
    textAlign: "right",
    px: [0],
  },
  m: 0,
  my: [4, 4],
  px: [4, 6],
  color: ({ gradients }) => gradients.midnight[2],
  "> p": {
    margin: 0,
    "&:last-child": {
      mt: [2],
    },
  },
};

const ulStyles = {
  listStyleType: "'»'",
  my: 6,
  p: 0,
  mx: 3,
};

const liStyles = {
  listStylePosition: "outside",
  "::marker": {
    color: "secondary",
  },
  mb: 3,
  "> p": {
    position: "relative",
    left: "1rem",
  },
};

const pStyles = {
  mb: 4,
};

const h3Styles = {};

const aStyles = {
  color: ({ gradients }) => gradients.skyBlue[3],
  textDecoration: "none",
  "&:hover": {
    color: ({ gradients }) => gradients.skyBlue[1],
  },
  "&:active": {},
  "&:visited": {},
};

const h2Styles = {
  mt: [6],
};

const hrStyles = {
  mt: [6],
};

const preStyles = {
  p: 6,
  bg: "black",
  mb: 4,
};

const a = (props) => <a sx={aStyles} {...props} />;
const pre = comp("pre", preStyles);
const ul = comp("ul", ulStyles);
const li = comp("li", liStyles);
const p = comp("p", pStyles);
const h2 = comp("h2", h2Styles);
const h3 = comp("h3", h3Styles);
const hr = comp("hr", hrStyles);
const blockquote = comp("blockquote", blockquoteStyles);

export { blockquote, p, pre, ul, li, h2, h3, a, hr };
