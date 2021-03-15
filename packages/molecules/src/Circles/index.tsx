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
  const r = cy * 0.95;
  const x = [{}];
  const y = [
    {},
    { population: [{}, {}, {}, {}] },
    { population: [{}, {}, {}] },
  ];
  const population = [
    { population: x },
    { population: x },
    {},
    { population: [{}] },
  ];
  console.log(population, x, y);
  return (
    <svg
      className={className}
      sx={outerWrapperStyles}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <Group x={cx} y={cy} size={r} population={x} />
    </svg>
  );
};

export { Circles };
