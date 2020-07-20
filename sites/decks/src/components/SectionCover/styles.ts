const outerWrapper = {
  display: "grid",
};

const innerWrapper = {
  display: "grid",
  alignContent: "center",
  "> h1": {
    textAlign: ["center", "center"],
    fontSize: ["4rem", "7rem"],
    lineHeight: "4rem",
  },
};

const headlineStyles = {
  display: "grid",
  gridRow: ["2/3", "1/2"],
  alignItems: ["center"],
  h1: {
    textAlign: ["center", "left"],
    fontSize: ["4rem", "7rem"],
    lineHeight: "4rem",
  },
};

export { headlineStyles, innerWrapper, outerWrapper };
