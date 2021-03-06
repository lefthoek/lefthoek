import { useBreakpointIndex } from "@theme-ui/match-media";
import { useCurrentDoc } from "docz";
// todo: aliases
// @ts-ignore
import { useMenus } from "hooks";
import { useEffect } from "react";
import { machine } from "./machine";
import { useMachine } from "@xstate/react";
import { OpenMenu } from "@lefthoek/types";

export const useAppState = () => {
  const breakpointIndex = useBreakpointIndex();
  const currentDoc = useCurrentDoc();
  const menu = useMenus();

  const context = {
    breakpointIndex: 999,
    currentDoc,
    menu,
    openMenu: currentDoc,
  };

  const [current, send] = useMachine(machine, {
    context,
  });

  useEffect(() => {
    current.context.breakpointIndex !== breakpointIndex &&
      send("UPDATE_BREAKPOINT_INDEX", { input: breakpointIndex });
  }, [breakpointIndex]);

  useEffect(() => {
    current.context.currentDoc != currentDoc &&
      send("UPDATE_CURRENT_DOC", { input: currentDoc });
  }, [currentDoc]);

  const isSidebarOpen = current.matches("sidebar_open");
  const toggleSidebar = () => send("TOGGLE");
  const setOpenMenu = (input: OpenMenu) => send("UPDATE_OPEN_MENU", { input });

  return {
    openMenu: current.context.openMenu,
    setOpenMenu,
    menu: current.context.menu,
    currentDoc: current.context.currentDoc,
    isSidebarOpen,
    toggleSidebar,
  };
};
