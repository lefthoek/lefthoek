/** @jsx jsx */
import { jsx, Heading, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { NavLink } from "@lefthoek/atoms";
import { Doc, Entry, OpenMenu } from "@lefthoek/types";
import { SlideOpen } from "./animations";
import { linkStyles } from "./styles";

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
  const isSubHeading = level === 1;
  const isHeading = level === 0;
  const headingVariant = isSubHeading ? "subHeading" : "heading";
  const isActive = currentDoc.name === menu.name;
  return (
    <Box className={className} key={menu.name}>
      {menu.route ? (
        <NavLink
          title={menu.name}
          sx={linkStyles({ isActive, isHeading })}
          isHeading={level === 0 ? true : false}
          to={menu.route}
        />
      ) : (
        <Heading
          variant={headingVariant}
          sx={linkStyles({ isActive, isHeading, isOpen })}
          onClick={() => {
            const menuName = isOpen ? null : menu.name;
            setOpenMenu({
              menu: isSubHeading ? null : menuName,
              submenu: isSubHeading ? menuName : null,
            });
          }}
        >
          {menu.name}
        </Heading>
      )}
      <SlideOpen sx={{ mb: 5 }} isOpen={isOpen}>
        {menu.entries?.map((entry: Entry) => (
          <MenuEntry
            level={level + 1}
            openMenu={openMenu}
            setOpenMenu={({ submenu }) =>
              setOpenMenu({ menu: menu.name, submenu })
            }
            currentDoc={currentDoc}
            key={entry.name}
            menu={entry}
          />
        ))}
      </SlideOpen>
    </Box>
  );
};
