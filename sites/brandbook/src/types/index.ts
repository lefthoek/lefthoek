import { Entry } from "docz";
export type Doc =
  | Entry
  | {
      name: string;
      route?: string;
      entries: Entry[] | Doc;
    };
