import { SxStyleProp } from "theme-ui";

export const linkStyles: (args: {
  isActive?: boolean;
  isHeading?: boolean;
  isOpen?: boolean;
}) => SxStyleProp = ({
  isActive = false,
  isHeading = false,
  isOpen = true,
}) => {
  return {
    userSelect: "none",
    color: isActive ? "accent" : "background",
    mb: isHeading ? 5 : isOpen ? 2 : 4,
  };
};
