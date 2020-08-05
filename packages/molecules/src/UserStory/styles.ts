export const cardStyles = {
  display: "block",
  p: 0,
  maxWidth: "45rem",
  minHeight: "35rem",
  alignItems: "flex-start",
  alignSelf: "center",
  justifySelf: "center",
};

export const ruleStyles = {
  m: 0,
  p: "1.5rem",
  borderBottom: "2px solid black",
  borderColor: "muted",
  "&:last-of-type": { borderBottom: "none" },
};

export const titleStyles = {
  ...ruleStyles,
  borderColor: "primary",
};
