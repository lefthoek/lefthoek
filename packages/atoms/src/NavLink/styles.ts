import { SxStyleProp } from "theme-ui";

export const linkStyles = {
  color: "background",
  textDecoration: "none",
};

export const headingStyles: (args: {
  isActive?: boolean;
  isSmallHeading?: boolean;
  inverse: boolean;
}) => SxStyleProp = ({ isActive = false, isSmallHeading = false, inverse }) => {
  const baseColor = inverse ? "background" : "text";
  return {
    mb: isSmallHeading ? 2 : 5,
    userSelect: "none",
    color: isActive ? "accent" : baseColor,
  };
};

export const entryStyles: (args: {
  isActive: boolean;
  inverse: boolean;
}) => SxStyleProp = ({ isActive, inverse }) => {
  const baseColor = inverse ? "background" : "text";
  return {
    userSelect: "none",
    mb: 2,
    color: isActive ? "accent" : baseColor,
  };
};
