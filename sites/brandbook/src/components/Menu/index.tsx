/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { Doc } from "../../types";
import { MenuEntry } from "./MenuEntry";
import { SubMenu } from "./SubMenu";

export const Menu: FunctionComponent<{
  menus: Doc[];
  currentDoc: { name: string; menu: string };
}> = ({ menus, currentDoc }) => {
  return (
    <Box>
      {menus.map((menu) => {
        const hasNoSubEntries = !menu.entries || !menu.entries.length;
        return hasNoSubEntries ? (
          <MenuEntry
            to={menu.route || ""}
            isActive={
              currentDoc.menu === menu.name ||
              (!currentDoc.menu && menu.name === "Introduction")
            }
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
