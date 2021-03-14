/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { outerWrapperStyles } from "./styles";

const Circle: FunctionComponent<{
  className?: string;
  r: number;
  cx: number;
  cy: number;
}> = ({ className, cx, cy, r }) => {
  return (
    <circle cx={cx} cy={cy} r={r} className={`${className} thinnestStroke`} />
  );
};

const Dot: FunctionComponent<{ cx: number; cy: number }> = ({ cx, cy }) => {
  return <Circle cx={cx} cy={cy} r={10} className="midnight noStroke" />;
};

const distributePopulation: (args: {
  population: number;
  r: number;
  cx: number;
  cy: number;
  offset?: number;
}) => { index: number; pointX: number; pointY: number }[] = ({
  population,
  r,
  offset = 0.5,
  cx,
  cy,
}) => {
  const theta = (2.0 * Math.PI) / population;
  const pointR = r * offset;
  return new Array(population).fill(undefined).map((_: any, index: number) => {
    return {
      index,
      pointX: pointR * Math.cos(theta * index) + cx,
      pointY: pointR * Math.sin(theta * index) + cy,
    };
  });
};

const Team: FunctionComponent<{
  className?: string;
  r: number;
  cx: number;
  cy: number;
  numberOfMembers?: number;
}> = ({ className, cx, cy, r, numberOfMembers = 3 }) => {
  const members = distributePopulation({
    population: numberOfMembers,
    r,
    cx,
    cy,
  });
  return (
    <g>
      <Circle className={className} cx={cx} cy={cy} r={r} />
      <text
        x={cx}
        y={cy}
        fontSize={r / 4}
        textAnchor="middle"
        fontFamily="IBM Plex Mono"
        fontWeight="400"
        alignmentBaseline="middle"
        fill="#32334E"
      >
        Slack
      </text>
      {members.map(({ pointX, pointY }) => (
        <Dot cx={pointX} cy={pointY} />
      ))}
    </g>
  );
};

const Circles: FunctionComponent<{
  className?: string;
  index: number;
  numberOfTeams?: number;
  variant?: "skyBlue" | "brightGreen" | "lobster";
}> = ({ className, numberOfTeams = 3 }) => {
  const size = 512;
  const cx = size / 2;
  const cy = size / 2;
  const r = cy - 6;
  const teamsData = distributePopulation({
    population: numberOfTeams,
    cx,
    cy,
    r,
  });
  return (
    <svg
      className={className}
      sx={outerWrapperStyles}
      viewBox="0 0 512 512"
      fill="none"
    >
      <Circle cx={cx} cy={cy} r={r} />
      {teamsData.map(({ pointX, pointY }) => (
        <Team
          r={r / numberOfTeams}
          cx={pointX}
          cy={pointY}
          numberOfMembers={3}
        />
      ))}
    </svg>
  );
};

export { Circles };
