/** @jsx jsx */
import { jsx, Box, Button } from "theme-ui";
import { useCurrentDoc } from "docz";
// @ts-ignore
import { useBreakpointIndex } from "@theme-ui/match-media";
import { FunctionComponent, useState } from "react";
// todo: aliases
// @ts-ignore
import { useMenus } from "hooks";
import { Menu } from "../Menu";
import { outerWrapperStyles, innerWrapperStyles } from "./styles";
import { SlideOpen } from "./animations";
// @ts-ignore
import { Menu as MenuIcon } from "gatsby-theme-docz/src/components/Icons";

export const Sidebar: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  const breakpointIndex = useBreakpointIndex();
  const isMobile = breakpointIndex === 0;
  const [isSidebarOpen, setSidebarOpen] = useState(isMobile ? false : true);
  const currentDoc = useCurrentDoc();
  const menus = useMenus();
  return (
    <SlideOpen
      onClick={() => isSidebarOpen && setSidebarOpen(!isSidebarOpen)}
      className={className}
      isSidebarOpen={isSidebarOpen}
      sx={outerWrapperStyles}
    >
      <Box sx={innerWrapperStyles}>
        <Menu menus={menus} currentDoc={currentDoc} />
      </Box>
      {isMobile && (
        <Button
          sx={{
            display: ["flex", "none"],
            justifyContent: "center",
            alignItems: "center",
            userSelect: "none",
            borderRadius: 0,
            bg: "text",
            color: "bg",
            p: 0,
            height: "3rem",
            width: "3rem",
            "&:active, &:focus": {
              outline: "none",
            },
          }}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <MenuIcon />
        </Button>
      )}
    </SlideOpen>
  );
};
