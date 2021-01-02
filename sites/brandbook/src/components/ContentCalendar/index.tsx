/** @jsx jsx */
import { FunctionComponent } from "react";
import Table from "../Table";
import { jsx } from "theme-ui";
import {
  startOfWeek,
  getWeek,
  getYear,
  getMonth,
  format,
  addWeeks,
} from "date-fns";

const times = (n: number) => Array(n).fill("i");

const groupBy = (data: any[], contentKey: string) => {
  return data.reduce((acc: any, item: any) => {
    const temp = { ...item };
    delete temp[contentKey];
    const key = item[contentKey];
    return {
      ...acc,
      [key]: acc[key] ? [...acc[key], temp] : [temp],
    };
  }, {});
};

const ContentCalendar: FunctionComponent<{ data: Record<string, any>[] }> = ({
  data,
}) => {
  const weeks: any = data
    .sort((prev, { startDate }) => prev.startDate - startDate)
    .reduce((acc: any[], { genre, frequency, startDate }: any) => {
      if (frequency === "None") {
        return acc;
      }
      const divider = {
        High: 1,
        Medium: 2,
        Low: 4,
      };

      const items = times(Math.floor(52 / divider[frequency]))
        .map((_, i) => {
          const multiplier = i * divider[frequency];
          const d = addWeeks(startDate, multiplier);
          const date = startOfWeek(d, { weekStartsOn: 1 });
          const week = getWeek(date);
          if (getYear(date) !== 2021 || (week === 1 && getMonth(date) === 11)) {
            return null;
          }
          return { week, date: format(date, "iii MMM dd"), genre };
        })
        .filter((i) => i);
      return [...acc, ...items];
    }, []);
  const grouped = groupBy(weeks, "week");
  const asArray: any[][] = Object.entries(grouped).map(
    ([k, v]: [string, Record<string, any>[]]) => {
      return v.map((s: any, index: number) => {
        if (index === 0) {
          return { week: k, ...s };
        }
        return {
          week: "",
          data: "",
          genre: s.genre,
        };
      });
    }
  );
  // @ts-ignore
  return <Table data={asArray.flat()} />;
};

export default ContentCalendar;
