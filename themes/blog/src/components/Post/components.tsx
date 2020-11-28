/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const comp = (as = "div", sx: any) => (props: any) => (
  <Box as={as} sx={sx} {...props} />
);

const blockquoteStyles = {
  m: 0,
  my: [4, 4],
  textAlign: "right",
  "> p": {
    margin: 0,
    "&:last-child": {
      mt: [2, 4],
    },
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
const p = comp("p", pStyles);
const h2 = comp("h2", h2Styles);
const h3 = comp("h3", h3Styles);
const hr = comp("hr", hrStyles);
const blockquote = comp("blockquote", blockquoteStyles);

export { blockquote, p, pre, h2, h3, a, hr };
