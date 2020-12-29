// @ts-ignore
import contentStrategy from "./content-strategy.yaml";

const groupBy = (contentKey: string) => {
  return contentStrategy.reduce((acc: any, item: any) => {
    const key = item[contentKey];
    delete item[contentKey];
    return {
      ...acc,
      [key]: acc[key] ? [...acc[key], item] : [item],
    };
  }, {});
};

export const byStartDate = groupBy("startDate");
export const byChannel = groupBy("channel");
export const byFrequency = groupBy("frequency");

export const byGenre = contentStrategy;
