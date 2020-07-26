const innerWrapper = {
  display: "grid",
  p: "1rem",
  alignContent: "center",
  dt: {
    fontWeight: 700,
    fontSize: [4, 5],
    textAlign: "left",
    "&:first-of-type:": {},
    mb: 4,
  },
  dd: {
    fontSize: [3, 4],
    textAlign: "left",
    mx: 0,
    mb: 4,
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
