import {OrganizationalEntity} from "./types";

const distributePopulation: (args: {
  population: OrganizationalEntity[];
  size: number;
  x: number;
  y: number;
  offset?: number;
}) => {
  index: number;
  population?: OrganizationalEntity[];
  size: number;
  x: number;
  y: number;
}[] = ({population, size, offset = 0.5, x, y}) => {
  const theta = (2.0 * Math.PI) / population.length;
  const pointR = size * offset;
  const newSize = size / population.length;
  return population.map(
    ({population}: OrganizationalEntity, index: number) => {
      return {
        population,
        index,
        size: newSize,
        x: pointR * Math.cos(theta * index) + x,
        y: pointR * Math.sin(theta * index) + y,
      };
    }
  );
};
export {distributePopulation};
