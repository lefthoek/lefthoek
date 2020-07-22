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
  h1: {
    textAlign: ["left", "left"],
    fontSize: [7, 8],
  },
};

const imageStyles = {
  display: "grid",
  justifyContent: "stretch",
  alignContent: "center",
};

export { logoStyles, imageStyles, outerWrapper, footerStyles, innerWrapper };
