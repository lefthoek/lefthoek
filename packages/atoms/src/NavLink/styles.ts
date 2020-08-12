import { SxStyleProp } from "theme-ui";

const margins = {
  0: 6,
  1: 5,
  2: 3,
};

export const linkStyles = {
  color: "background",
  textDecoration: "none",
};

export const headingStyles: (args: {
  level?: number;
  isActive?: boolean;
}) => SxStyleProp = ({ level = 0, isActive = false }) => {
  return {
    userSelect: "none",
    mb: margins[level],
    color: isActive ? "accent" : "text",
  };
};

export const entryStyles: (args: { isActive: boolean }) => SxStyleProp = ({
  isActive,
}) => {
  return {
    userSelect: "none",
    fontSize: 3,
    fontWeight: "body",
    lineHeight: "body",
    mb: 3,
    color: isActive ? "accent" : "text",
  };
};
