export type Frequency = "High" | "Medium" | "Low" | "None";

export type ContentData = {
  startDate: Date;
  genre: string;
  frequency: Frequency;
};

export type CalendarData = {
  week: number;
  genre: string;
  date: Date;
};
