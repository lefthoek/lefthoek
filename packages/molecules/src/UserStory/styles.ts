import { SxStyleProp } from "theme-ui";

export const cardStyles: (args: {
  status?: "rejected";
  rating?: number;
}) => SxStyleProp = ({ rating = 1 }) => {
  return {
    opacity: 0.2 * rating,
    display: "block",
    p: 0,
    maxWidth: "45rem",
    minHeight: "35rem",
    alignItems: "flex-start",
    alignSelf: "center",
    justifySelf: "center",
  };
};

export const ruleStyles: SxStyleProp = {
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

