import {ContentData, Frequency, CalendarData} from "./types";
import {startOfWeek, getWeek, getYear, getMonth, addWeeks} from "date-fns";

const groupBy = (data: any[], contentKey: string) => {
  return data.reduce((acc: any, item: any) => {
    const temp = {...item};
    delete temp[contentKey];
    const key = item[contentKey];
    return {
      ...acc,
      [key]: acc[key] ? [...acc[key], temp] : [temp],
    };
  }, {});
};

const times = (n: number) => Array(n).fill("");

const calcStartDate = (startDate: Date, index: number, multiplier: number) => {
  const supplement = index * multiplier;
  const d = addWeeks(startDate, supplement);
  return startOfWeek(d, {weekStartsOn: 1});
};

const getMultiplier = (frequency: Frequency) => {
  const divider = {
    None: 0,
    High: 1,
    Medium: 2,
    Low: 4,
  };
  return divider[frequency];
};

const prepareData = (data: ContentData[]) => {
  return data.reduce((acc, {frequency, startDate, ...rest}) => {
    if (frequency === "None") {
      return acc;
    }
    const multiplier = getMultiplier(frequency);
    const items = times(Math.floor(52 / multiplier))
      .map((_, i) => {
        const date = calcStartDate(startDate, i, multiplier);
        const week = getWeek(date);
        if (getYear(date) !== 2021 || (week === 1 && getMonth(date) === 11)) {
          return null;
        }
        return {week, date, ...rest};
      })
      .filter((i) => i);
    return [...acc, ...items];
  }, []);
};

const formatData = (data: Record<string, CalendarData[]>) => {
  return Object.entries(data)
    .map(([week, v]: [string, CalendarData[]]) => {
      return v.map(({genre, date}, index) => {
        if (index === 0) {
          return {week, genre, date};
        }
        return {
          week: "",
          date: "",
          genre,
        };
      });
    })
    .flat();
};

export {prepareData, formatData, groupBy};
