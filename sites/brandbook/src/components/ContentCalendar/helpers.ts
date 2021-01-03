import {CalendarData} from "@lefthoek/data/src/types";

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

const formatData = (data: Record<string, CalendarData[]>) => {
  return Object.entries(data)
    .map(([week, v]: [string, CalendarData[]]) => {
      return v.map(({genre, date}, index) => {
        if (index === 0) {
          return {week, date, genre};
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

export {groupBy, formatData};
