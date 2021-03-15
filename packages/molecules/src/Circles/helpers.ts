import {OrganizationalEntity} from "./types";

const distributePopulation: (args: {
  population: OrganizationalEntity[];
  size: number;
  x: number;
  y: number;
  depth: number;
}) => {
  index: number;
  population?: OrganizationalEntity[];
  depth: number;
  size: number;
  x: number;
  y: number;
}[] = ({population, depth, size, x, y}) => {
  const newDepth = depth + 1;
  if (population.length === 1) {
    return [
      {
        population: population[0].population,
        index: 0,
        depth: newDepth,
        size,
        x,
        y,
      },
    ];
  }

  const theta = (2.0 * Math.PI) / population.length;
  const pointR = size * 0.6;
  const newSize = size / (population.length > 5 ? population.length - 2 : 3);
  return population.map(
    ({population}: OrganizationalEntity, index: number) => {
      return {
        population,
        index,
        depth: newDepth,
        size: newSize,
        x: pointR * Math.cos(theta * index) + x,
        y: pointR * Math.sin(theta * index) + y,
      };
    }
  );
};
export {distributePopulation};
