import { CalendarData } from "@lefthoek/data/src/types";

const formatData = (data: Record<string, CalendarData[]>) => {
    return Object.entries(data)
        .map(([week, v]: [string, CalendarData[]]) => {
            return v.map(({ genre, categories, date }, index) => {
                const c = categories.join(", ");
                if (index === 0) {
                    return { week, date, genre, categories: c };
                }
                return {
                    week: "",
                    date: "",
                    categories: c,
                    genre,
                };
            });
        })
        .flat();
};

export { formatData };
