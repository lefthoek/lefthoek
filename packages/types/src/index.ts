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

export type IconName =
    | "Binders"
    | "Chat"
    | "Curtains"
    | "Diamond"
    | "Different"
    | "HighFive"
    | "Hologram"
    | "Knot"
    | "Microphone"
    | "OpenHand"
    | "Placeholder"
    | "SewingMachine";
