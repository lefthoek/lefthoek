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
export type Measure = {
  dataKey: string;
  minName: string;
  maxName: string;
};

export type CompetitionData = {
  name: string;
  url: string;
  automation: number;
  importance: number;
  relevance: number;
};

export interface IPost {
  id: string;
  slug: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  excerpt: string;
  body: string;
  coverImage: any;
  coverImageSrc: string;
}

export interface IThemeable {
  className?: string;
}
