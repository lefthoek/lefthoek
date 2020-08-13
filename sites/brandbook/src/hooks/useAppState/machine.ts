import { Machine, send } from "xstate";
import { createUpdater, ImmerUpdateEvent } from "@xstate/immer";
import { CurrentDoc, OpenMenu, Doc } from "@lefthoek/types";

export interface AppStateContext {
  breakpointIndex: number;
  menu: Doc[];
  currentDoc: CurrentDoc;
  openMenu: OpenMenu;
}
type BreakPointIndexUpdateEvent = ImmerUpdateEvent<
  "UPDATE_BREAKPOINT_INDEX",
  number
>;
type OpenMenuUpdater = ImmerUpdateEvent<"UPDATE_OPEN_MENU", OpenMenu>;
type CurrentDocUpdateEvent = ImmerUpdateEvent<"UPDATE_CURRENT_DOC", CurrentDoc>;

const breakpointIndexUpdater = createUpdater<
  AppStateContext,
  BreakPointIndexUpdateEvent
>("UPDATE_BREAKPOINT_INDEX", (ctx, { input }) => {
  ctx.breakpointIndex = input;
});

const currenDocUpdater = createUpdater<AppStateContext, CurrentDocUpdateEvent>(
  "UPDATE_CURRENT_DOC",
  (ctx, { input }) => {
    const { menu, submenu } = input;
    ctx.currentDoc = input;
    ctx.openMenu = { menu, submenu };
  }
);
const openMenuUpdater = createUpdater<AppStateContext, OpenMenuUpdater>(
  "UPDATE_OPEN_MENU",
  (ctx, { input }) => {
    ctx.openMenu = input;
  }
);

export const machine = Machine<AppStateContext>({
  id: "toggle",
  initial: "sidebar_open",
  on: {
    [breakpointIndexUpdater.type]: [
      {
        actions: [breakpointIndexUpdater.action, send("TOGGLE")],
      },
    ],
    [currenDocUpdater.type]: [
      {
        actions: [currenDocUpdater.action],
      },
    ],
    [openMenuUpdater.type]: [
      {
        actions: [openMenuUpdater.action],
      },
    ],
  },
  states: {
    sidebar_open: {
      on: {
        TOGGLE: {
          target: "sidebar_closed",
          cond: (context) => context.breakpointIndex <= 1,
        },
        CLOSE_SIDEBAR: {
          target: "sidebar_closed",
          cond: (context) => context.breakpointIndex <= 1,
        },
      },
    },
    sidebar_closed: {
      on: { TOGGLE: "sidebar_open" },
    },
  },
});
