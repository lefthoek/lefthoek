/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { Doc } from "@lefthoek/types";
import { NavLink } from "@lefthoek/atoms";
import { SubMenu } from "@lefthoek/molecules";

export const Menu: FunctionComponent<{
  menus: Doc[];
  currentDoc: { name: string; menu: string };
}> = ({ menus, currentDoc }) => {
  return (
    <Box>
      {menus.map((menu) => {
        const hasNoSubEntries = !menu.entries || !menu.entries.length;
        const isActive =
          currentDoc.menu === menu.name ||
          (!currentDoc.menu && menu.name === "Introduction");
        return hasNoSubEntries ? (
          <NavLink
            to={menu.route || ""}
            sx={{ color: isActive ? "accent" : "background" }}
            isActive={isActive}
            isHeading
            title={menu.name}
          />
        ) : (
          <SubMenu currentDoc={currentDoc} menu={menu} />
        );
      })}
    </Box>
  );
};
