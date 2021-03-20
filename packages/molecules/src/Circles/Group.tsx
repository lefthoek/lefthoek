/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Circle, Dot, Label } from "./Primitives";
import { distributePopulation } from "./helpers";
import { OrganizationalEntity } from "./types";

const Group: FunctionComponent<{
  className?: string;
  size: number;
  label?: string;
  x: number;
  y: number;
  depth?: number;
  population: OrganizationalEntity[];
}> = ({ className, label, x, y, size, depth = 0, population }) => {
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
      {label && (
        <Label x={x} y={y} fontSize={size / 8}>
          {label}
        </Label>
      )}
      {members.map(({ population, populationType, ...member }) => {
        if (!population) {
          return populationType === "lefthoek" ? (
            <Dot {...member} x={x} y={y} variant="highlight" />
          ) : (
            <Dot {...member} variant="normal" />
          );
        }
        return <Group population={population} {...member} />;
      })}
    </g>
  );
};

export { Group };
