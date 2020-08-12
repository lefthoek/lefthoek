/** @jsx jsx */
import { jsx, Box, MenuButton } from "theme-ui";
import { FunctionComponent } from "react";
// todo: ts-aliases
// @ts-ignore
import { useAppState } from "hooks";
import { Menu } from "../Menu";
import {
  outerWrapperStyles,
  innerWrapperStyles,
  menuButtonStyles,
} from "./styles";
import { SlideOpen } from "./animations";

export const Sidebar: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  const { menus, isSidebarOpen, currentDoc, setSidebarOpen } = useAppState();
  return (
    <SlideOpen
      className={className}
      isSidebarOpen={isSidebarOpen}
      sx={outerWrapperStyles}
    >
      <Box sx={innerWrapperStyles}>
        <Menu menus={menus} currentDoc={currentDoc} />
      </Box>
      <MenuButton
        sx={menuButtonStyles}
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      />
    </SlideOpen>
  );
};
