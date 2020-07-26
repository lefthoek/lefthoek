const logoStyles = {};

const infoStyles = {
  display: "grid",
  alignContent: ["end", "end", "end"],
  justifyContent: ["end", "end"],
  py: "2rem",
  p: {
    m: 0,
    textAlign: ["right", "right"],
  },
};

const footerStyles = {
  display: "grid",
  gridRow: ["2/3"],
  justifyContent: "end",
  alignContent: "end",
};

const outerWrapper = {
  display: "grid",
  gridTemplateRows: ["8fr auto"],
};

const innerWrapper = {
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "1fr", "2fr 1fr"],
  gridTemplateRows: ["3fr 1fr", "3fr 1fr", "3fr 1fr", "1fr"],
  justifyContent: "stretch",
};

const headlineStyles = {
  display: "grid",
  alignItems: ["center"],
  h1: {
    textAlign: ["left", "left"],
    fontSize: ["4rem", "7rem"],
    lineHeight: "4rem",
  },
};

export {
  infoStyles,
  headlineStyles,
  logoStyles,
  outerWrapper,
  footerStyles,
  innerWrapper,
};
