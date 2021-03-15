/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Circle, Dot, Label } from "./Primitives";
import { distributePopulation } from "./helpers";
import { OrganizationalEntity } from "./types";

const Group: FunctionComponent<{
  className?: string;
  size: number;
  x: number;
  y: number;
  depth?: number;
  population: OrganizationalEntity[];
}> = ({ className, x, y, size, depth = 0, population }) => {
  const members = distributePopulation({
    population,
    size,
    depth,
    x,
    y,
  });
  return (
    <g>
      <Circle depth={depth} className={className} cx={x} cy={y} r={size} />
      <Label x={x} y={y} fontSize={size / 8}>
        Slack
      </Label>
      {members.map(({ population, ...member }) => {
        return !population ? (
          <Dot {...member} />
        ) : (
          <Group population={population} {...member} />
        );
      })}
    </g>
  );
};

export { Group };
