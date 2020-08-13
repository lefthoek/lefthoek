import { Entry as DoczEntry } from "docz";

export type Entry = DoczEntry;
export type Doc =
  | Entry
  | {
      name: string;
      route?: string;
      entries: Entry[] | Doc;
    };

export type CurrentDoc = { name: string; menu: string; submenu?: string };
export type OpenMenu = { menu: string | null; submenu?: string | null };
