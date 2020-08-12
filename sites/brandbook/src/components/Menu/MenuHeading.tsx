/** @jsx jsx */
import { jsx, Text } from "theme-ui";
import { FunctionComponent } from "react";
import { headingStyles } from "./styles";

export const MenuHeading: FunctionComponent<{
  className?: string;
  level: number;
  onClick?: () => void;
  isActive?: boolean;
  title: string;
}> = ({ className, level, onClick, isActive = false, title }) => {
  const isSubheading = level === 2;
  return (
    <Text
      variant={isSubheading ? "subHeading" : "heading"}
      onClick={onClick}
      sx={headingStyles({ level, isActive })}
      className={className}
    >
      {title}
    </Text>
  );
};
