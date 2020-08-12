import { Entry as DoczEntry } from "docz";

export type Entry = DoczEntry;
export type Doc =
  | Entry
  | {
      name: string;
      route?: string;
      entries: Entry[] | Doc;
    };
