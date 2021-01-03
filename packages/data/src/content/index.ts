// @ts-ignore
import strategy from "./strategy.yaml";
import {toCalendarData} from "./helpers";

const calendar = toCalendarData(strategy);

export {calendar, strategy};
