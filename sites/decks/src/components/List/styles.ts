const innerWrapper = {
  display: "grid",
  alignContent: "center",
  dt: {
    fontWeight: 700,
    textAlign: "left",
    "&:first-of-type:": {},
  },
  dd: {
    textAlign: "left",
  },
};
const outerWrapper = {
  display: "grid",
  gridTemplateRows: ["14fr 1fr"],
};

const logoStyles = {
  h1: {
    color: "grayScale.4",
    bg: "grayScale.0",
  },
};

export { outerWrapper, innerWrapper, logoStyles };
