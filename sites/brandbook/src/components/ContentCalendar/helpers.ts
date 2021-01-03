import { CalendarData } from "@lefthoek/data/src/types";

const formatData = (data: Record<string, CalendarData[]>) => {
    return Object.entries(data)
        .map(([week, v]: [string, CalendarData[]]) => {
            return v.map(({ genre, date }, index) => {
                if (index === 0) {
                    return { week, date, genre };
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

export { formatData };
