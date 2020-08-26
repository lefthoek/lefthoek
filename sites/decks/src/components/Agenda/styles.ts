const innerWrapper = {
  display: "grid",
  alignContent: "center",
  px: "1rem",
  ul: {
    listStyle: "none",
    ml: 0,
    pl: 0,
    li: {
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [4, 5],
      my: 4,
    },
  },
};

const outerWrapper = {
  display: "grid",
  gridTemplateRows: ["14fr 1fr"],
};

const logoStyles = {};

export { outerWrapper, innerWrapper, logoStyles };
