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
  population: OrganizationalEntity[];
}> = ({ className, x, y, size, population }) => {
  const members = distributePopulation({
    offset: 0.5,
    population,
    size,
    x,
    y,
  });
  return (
    <g>
      <Circle className={className} cx={x} cy={y} r={size} />
      {false && (
        <Label x={x} y={y} fontSize={size / 4}>
          Slack
        </Label>
      )}
      {members.map(({ population, ...member }) => {
        console.log(member);
        if (!population) {
          return <Dot {...member} />;
        }
        return <Group population={population} {...member} />;
      })}
    </g>
  );
};

export { Group };
