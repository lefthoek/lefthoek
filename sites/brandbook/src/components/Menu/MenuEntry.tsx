/** @jsx jsx */
import { jsx, Text } from "theme-ui";
import { Link } from "docz";
import { FunctionComponent } from "react";
import { MenuHeading } from "./MenuHeading";
import { linkStyles, entryStyles } from "./styles";

export const MenuEntry: FunctionComponent<{
  title: string;
  isHeading?: boolean;
  isActive?: boolean;
  to: string;
}> = ({ title, isActive = true, isHeading = false, to }) => {
  return (
    <Link key={title} sx={linkStyles} to={to}>
      {isHeading ? (
        <MenuHeading isActive={isActive} level={0} title={title} />
      ) : (
        <Text sx={entryStyles({ isActive })}>{title}</Text>
      )}
    </Link>
  );
};
