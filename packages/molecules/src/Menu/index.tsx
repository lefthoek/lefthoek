/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { Doc, OpenMenu } from "@lefthoek/types";
import { MenuEntry } from "./MenuEntry";

export const Menu: FunctionComponent<{
  menu: Doc[];
  currentDoc: { name: string; menu: string };
  setOpenMenu: (menu: OpenMenu) => void;
  openMenu: OpenMenu;
}> = ({ menu, currentDoc, setOpenMenu, openMenu }) => {
  return (
    <Box>
      {menu.map((entry) => {
        return (
          <MenuEntry
            sx={{ mb: 6 }}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            currentDoc={currentDoc}
            menu={entry}
          />
        );
      })}
    </Box>
  );
};
