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
  alignItems: "center",
  px: "1rem",
  h1: {
    textAlign: ["left", "left"],
  },
};

const imageStyles = {
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
};

export { logoStyles, imageStyles, outerWrapper, footerStyles, innerWrapper };
