import { SxStyleProp } from "theme-ui";

export const cardStyles: (args: {
  status?: "rejected";
  rating?: number;
}) => SxStyleProp = ({ rating = 1 }) => {
  return {
    bg: "muted",
    mb: 5,
    p: 5,
    opacity: true ? 1 : 0.2 * rating,
    maxWidth: ["40rem"],
  };
};

export const ruleStyles: SxStyleProp = {
  mb: 6,
  "&:last-of-type": { pb: 0, mb: [5, 0], borderBottom: "none" },
};
