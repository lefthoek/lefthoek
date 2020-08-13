/** @jsx jsx */
import { jsx, Heading, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { NavLink } from "@lefthoek/atoms";
import { Doc, Entry, OpenMenu } from "@lefthoek/types";
import { SlideOpen } from "./animations";
import { subMenuStyles, headingStyles } from "./styles";

export const SubMenu: FunctionComponent<{
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
  const headingVariant = isSubHeading ? "subHeading" : "heading";
  return (
    <Box sx={subMenuStyles({ level })} className={className} key={menu.name}>
      <Heading
        variant={headingVariant}
        sx={headingStyles({
          level: level + 1,
          isActive: currentDoc.name === menu.name,
        })}
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
      <SlideOpen isOpen={isOpen}>
        {menu.entries.map((entry: Entry) => {
          return entry.entries ? (
            <SubMenu
              level={level + 1}
              openMenu={openMenu}
              setOpenMenu={({ submenu }) =>
                setOpenMenu({ menu: menu.name, submenu })
              }
              currentDoc={currentDoc}
              key={entry.name}
              menu={entry}
            />
          ) : (
            <NavLink
              title={entry.name}
              sx={{
                color: currentDoc.name === entry.name ? "accent" : "background",
              }}
              to={entry.route}
            />
          );
        })}
      </SlideOpen>
    </Box>
  );
};
