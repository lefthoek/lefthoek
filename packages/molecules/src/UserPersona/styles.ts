export const canvasStyles = {
  display: ["flex", "grid"],
  flexDirection: ["column"],
  gridTemplateColumns: "repeat(10, 1fr)",
  gridTemplateRow: "repeat(3, 10rem)",
  p: 2,
  m: 0,
  mb: 5,
  gridGap: 2,

  ".personalia, .company": {
    gridColumn: "span 5",
  },
  ".responsibilities, .information": {
    gridRow: "span 2",
    gridColumn: "span 2",
  },
};

export const cardStyles = {
  borderColor: "primary",
  bg: "muted",
  gridColumn: "span 3",
  m: 0,
};
