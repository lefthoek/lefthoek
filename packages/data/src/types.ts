export type Frequency = "High" | "Medium" | "Low" | "None";

export enum ContentKeys {
  BY_CATEGORY = "categories",
  BY_START_DATE = "startDate",
  BY_GENRE = "genre",
  BY_ROLE = "roles",
  BY_CHANNEL = "channel",
  BY_FREQUENCY = "frequency",
}

export type ContentData = {
  startDate: Date;
  genre: string;
  frequency: Frequency;
};

export type CalendarData = {
  week: number;
  categories: string[];
  genre: string;
  date: Date;
};
