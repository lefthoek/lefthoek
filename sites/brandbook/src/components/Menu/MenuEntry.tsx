/** @jsx jsx */
import { jsx, Text, Heading } from "theme-ui";
import { Link } from "docz";
import { FunctionComponent } from "react";
import { linkStyles, entryStyles, headingStyles } from "./styles";

export const MenuEntry: FunctionComponent<{
  title: string;
  isHeading?: boolean;
  isActive?: boolean;
  to: string;
}> = ({ title, isActive = true, isHeading = false, to }) => {
  return (
    <Link key={title} sx={linkStyles} to={to}>
      {isHeading ? (
        <Heading sx={headingStyles({ level: 0, isActive })}>{title}</Heading>
      ) : (
        <Text sx={entryStyles({ isActive })}>{title}</Text>
      )}
    </Link>
  );
};
