/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";
// todo: ts-aliases
// @ts-ignore
import { useAppState } from "hooks";
import { Menu } from "../Menu";
import { outerWrapperStyles, innerWrapperStyles } from "./styles";
import { SlideOpen } from "./animations";
import { MenuButton } from "./MenuButton";

export const Sidebar: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  const {
    menus,
    isSidebarOpen,
    isMobile,
    currentDoc,
    setSidebarOpen,
  } = useAppState();
  return (
    <SlideOpen
      onClick={() => isMobile && isSidebarOpen && setSidebarOpen(!isSidebarOpen)}
      className={className}
      isSidebarOpen={isSidebarOpen}
      sx={outerWrapperStyles}
    >
      <Box sx={innerWrapperStyles}>
        <Menu menus={menus} currentDoc={currentDoc} />
      </Box>
      {isMobile && (
        <MenuButton onClick={() => setSidebarOpen(!isSidebarOpen)} />
      )}
    </SlideOpen>
  );
};
