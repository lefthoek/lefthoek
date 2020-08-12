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
  level: number;
  isActive: boolean;
}) => SxStyleProp = ({ level, isActive }) => {
  return {
    userSelect: "none",
    color: isActive ? "accent" : "background",
    mb: margins[level],
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
    color: isActive ? "accent" : "background",
  };
};

export const subMenuStyles: (args: { level: number }) => SxStyleProp = ({
  level,
}) => {
  return {
    mb: level === 0 ? 6 : 4,
  };
};
