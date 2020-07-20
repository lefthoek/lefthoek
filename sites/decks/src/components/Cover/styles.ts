const logoStyles = {};

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
  gridTemplateColumns: ["1fr", "2fr 1fr"],
  gridTemplateRows: ["3fr 1fr", "1fr"],
  justifyContent: "stretch",
};

const headlineStyles = {
  display: "grid",
  gridRow: ["2/3", "1/2"],
  alignItems: ["center"],
  h1: {
    textAlign: ["center", "left"],
    fontSize: ["4rem", "7rem"],
    lineHeight: ["4rem", "7rem"],
  },
};

const imageStyles = {
  display: "grid",
  justifyContent: "stretch",
  alignContent: "center",
};

export {
  headlineStyles,
  logoStyles,
  imageStyles,
  outerWrapper,
  footerStyles,
  innerWrapper,
};
