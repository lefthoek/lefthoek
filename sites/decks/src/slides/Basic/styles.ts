const outerWrapper = {
  bg: "muted",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: ["center", "center"],
  color: "text",
  p: 6,
};

const innerWrapper = {
  p: {
    fontSize: [1, 2],
    lineHeight: ["25px", "28px"],
    my: [3, 1],
  },
  strong: {
    color: "primary",
  },
  h1: {
    fontSize: [6, 7],
    textAlign: ["center", "center"],
    mb: [4, 6],
  },
};

export { outerWrapper, innerWrapper };
