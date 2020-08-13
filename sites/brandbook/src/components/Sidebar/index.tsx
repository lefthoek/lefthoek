/** @jsx jsx */
import { jsx, Box, MenuButton } from "theme-ui";
import { FunctionComponent } from "react";
// todo: ts-aliases
// @ts-ignore
import { useAppState } from "hooks";
import { Menu } from "@lefthoek/molecules";
import {
  outerWrapperStyles,
  innerWrapperStyles,
  menuButtonStyles,
} from "./styles";
import { SlideOpen } from "./animations";

export const Sidebar: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  const {
    toggleSidebar,
    isSidebarOpen,
    menu,
    currentDoc,
    setOpenMenu,
    openMenu,
  } = useAppState();
  return (
    <SlideOpen
      className={className}
      isSidebarOpen={isSidebarOpen}
      sx={outerWrapperStyles}
    >
      <Box sx={innerWrapperStyles}>
        <Menu
          menu={menu}
          setOpenMenu={setOpenMenu}
          currentDoc={currentDoc}
          openMenu={openMenu}
        />
      </Box>
      <MenuButton sx={menuButtonStyles} onClick={toggleSidebar} />
    </SlideOpen>
  );
};
