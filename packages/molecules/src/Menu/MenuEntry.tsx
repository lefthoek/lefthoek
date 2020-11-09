/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { NavLink } from "@lefthoek/atoms";
import { Doc, Entry, OpenMenu } from "@lefthoek/types";

export const MenuEntry: FunctionComponent<{
  level?: number;
  openMenu?: OpenMenu;
  setOpenMenu: (menu: OpenMenu) => void;
  currentDoc: { name: string; menu: string };
  menu: Doc;
  className?: string;
}> = ({
  level = 0,
  currentDoc,
  openMenu = { menu: null, submenu: null },
  setOpenMenu,
  menu,
  className,
}) => {
  const isOpen = menu.name === openMenu.menu || menu.name === openMenu.submenu;
  const isHeading = level === 0;
  const isActive = currentDoc.name === menu.name;
  const hasEntries = !!menu.entries;
  return (
    <Box className={className} key={menu.name}>
      <NavLink
        title={menu.name}
        inverse
        variant={isHeading ? "abstract" : hasEntries ? "titolettoAlt" : "link"}
        isActive={isActive}
        to={menu.route}
        onClick={() => {
          const menuName = isOpen ? null : menu.name;
          setOpenMenu({
            menu: isHeading ? menuName : null,
            submenu: isHeading ? null : menuName,
          });
        }}
      />
      {menu.entries?.map((entry: Entry) => (
        <MenuEntry
          level={level + 1}
          sx={{ display: isOpen ? "block" : "none" }}
          openMenu={openMenu}
          setOpenMenu={({ submenu }) =>
            setOpenMenu({ menu: menu.name, submenu })
          }
          currentDoc={currentDoc}
          key={entry.name}
          menu={entry}
        />
      ))}
    </Box>
  );
};
