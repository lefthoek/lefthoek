import { useBreakpointIndex } from "@theme-ui/match-media";
import { useCurrentDoc } from "docz";
// todo: aliases
// @ts-ignore
import { useMenus } from "hooks";
import { useState } from "react";

export const useAppState = () => {
  const breakpointIndex = useBreakpointIndex();
  const isMobile = breakpointIndex === 0;
  const [isSidebarOpen, setSidebarOpen] = useState(isMobile ? false : true);
  const currentDoc = useCurrentDoc();
  const menus = useMenus();
  return { menus, isMobile, currentDoc, isSidebarOpen, setSidebarOpen };
};
