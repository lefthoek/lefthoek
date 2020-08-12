/** @jsx jsx */
import { jsx } from "theme-ui";
import { useCurrentDoc } from "docz";
import { FunctionComponent } from "react";
import { useMenus } from "hooks";
import { Menu } from "../Menu";
import { sidebarStyles } from "./styles";
import { SlideOpen } from "./animations";

export const Sidebar: FunctionComponent<{
  isSidebarOpen: boolean;
  className?: string;
}> = ({ isSidebarOpen, className }) => {
  const currentDoc = useCurrentDoc();
  const menus = useMenus();
  return (
    <SlideOpen
      className={className}
      isSidebarOpen={isSidebarOpen}
      sx={sidebarStyles}
    >
      <Menu menus={menus} currentDoc={currentDoc} />
    </SlideOpen>
  );
};
