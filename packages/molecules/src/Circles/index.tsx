/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Group } from "./Group";
import { outerWrapperStyles } from "./styles";

const Circles: FunctionComponent<{
  className?: string;
  index: number;
  numberOfTeams?: number;
  variant?: "skyBlue" | "brightGreen" | "lobster";
}> = ({ className }) => {
  const size = 512;
  const cx = size / 2;
  const cy = size / 2;
  const x = [{ population: [{}, {}, {}, {}] }];
  const y = [
    { population: [{}, {}, {}, {}, {}, {}] },
    { population: [{}, {}, {}] },
    { population: [{}, {}, {}] },
  ];
  const population = [
    { population: [{}, {}, {}, {}, {}, {}] },
    {},
    { population: y },
    { population: y },
    { population: y },
    { population: y },
    { population: y },
  ];
  console.log(population, x, y);
  return (
    <svg
      className={className}
      sx={outerWrapperStyles}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <Group x={cx} y={cy} size={(size / 2) * 0.9} population={population} />
    </svg>
  );
};

export { Circles };
