import { SxStyleProp } from "theme-ui";

export const cardStyles: (args: {
  status?: "rejected";
  rating?: number;
}) => SxStyleProp = ({ rating = 1 }) => {
  return {
    opacity: 0.2 * rating,
    maxWidth: "45rem",
    minHeight: "35rem",
    maxHeight: "80vh",
    overflowY: "scroll",
  };
};

export const ruleStyles: SxStyleProp = {
  m: 0,
  borderBottom: "2px solid black",
  borderColor: "muted",
  "&:last-of-type": { borderBottom: "none" },
};

export const titleStyles = {
  ...ruleStyles,
  borderColor: "primary",
};
