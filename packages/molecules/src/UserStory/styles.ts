import { SxStyleProp } from "theme-ui";

export const cardStyles: (args: {
  status?: "rejected";
  rating?: number;
}) => SxStyleProp = ({ rating = 1 }) => {
  return {
    opacity: true ? 1 : 0.2 * rating,
    maxWidth: ["80rem"],
    minHeight: "35rem",
    maxHeight: "80vh",
    overflowY: "scroll",
  };
};

export const ruleStyles: SxStyleProp = {
  mb: 6,
  "&:last-of-type": { pb: 0, mb: 0, borderBottom: "none" },
};

