export const canvasStyles = {
  display: ["flex", "grid"],
  flexDirection: ["column"],
  gridTemplateColumns: "repeat(10, 1fr)",
  gridTemplateRow: "repeat(3, 10rem)",
  p: 0,
  m: 0,
  gridGap: "1rem",

  ".key-partnerships": {
    order: 1,
    gridRow: "1 / 3",
    gridColumn: "1 / 3",
  },
  ".key-activities": {
    order: 2,
    gridRow: "1 / 2",
    gridColumn: "3 / 5",
  },
  ".value-propositions": {
    order: 3,
    gridRow: "1 / 3",
    gridColumn: "5 / 7",
  },
  ".customer-relationships": {
    order: 4,
    gridRow: "1 / 2",
    gridColumn: "7 / 9",
  },
  ".customer-segments": {
    order: 5,
    gridRow: "1 / 3",
    gridColumn: "9 / 11",
  },
  ".key-resources": {
    order: 6,
    gridRow: "2 / 3",
    gridColumn: "3 / 5",
  },
  ".channels": {
    order: 7,
    gridRow: "2 / 3",
    gridColumn: "7 / 9",
  },
  ".revenue-streams": {
    order: 8,
    gridRow: "3 / 4",
    gridColumn: "1 / 6",
  },
  ".cost-structure": {
    order: 9,
    gridRow: "3 / 4",
    gridColumn: "6 / 11",
  },
};

export const cardStyles = {
  m: 0,
  p: 3,
  mb: [3, 0],
};
