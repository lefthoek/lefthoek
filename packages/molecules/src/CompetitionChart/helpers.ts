import { chain } from "voca";
type AreaShape = "circle" | "square" | "star" | "triangle";
type AreaData = {
  shape: AreaShape;
  name: string;
  data: any;
  color: string;
};

const visuals: [AreaShape, string][] = [
  ["star", "primary"],
  ["square", "text"],
  ["circle", "highlight"],
  ["triangle", "secondary"],
];

const processName = (name: string) =>
  chain(name).kebabCase().replaceAll("-", " ").titleCase().value();

export const createAreaData: (
  args: [string, any],
  index: number
) => AreaData = ([key, data], index) => {
  const [shape, color] = visuals[index % visuals.length];
  const name = processName(key);
  return {
    shape,
    name,
    data,
    color,
  };
};
