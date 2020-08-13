import { SxStyleProp } from "theme-ui";

export const linkStyles = {
  color: "background",
  textDecoration: "none",
};

export const headingStyles: (args: {
  level?: number;
  isActive?: boolean;
}) => SxStyleProp = ({ isActive = false }) => {
  return {
    userSelect: "none",
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
    color: isActive ? "accent" : "text",
  };
};
