/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";

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

const Dot: FunctionComponent<{
  className?: string;
  x: number;
  y: number;
}> = ({ x, y, className }) => {
  return (
    <Circle
      cx={x}
      cy={y}
      r={5}
      className={`${className || "midnight"} noStroke`}
    />
  );
};

const Label: FunctionComponent<{ x: number; y: number; fontSize: number }> = ({
  x,
  y,
  fontSize,
  children,
}) => {
  return (
    <text
      x={x}
      y={y}
      fontSize={fontSize}
      textAnchor="middle"
      fontFamily="IBM Plex Mono"
      fontWeight="400"
      alignmentBaseline="middle"
      fill="#32334E"
    >
      {children}
    </text>
  );
};

export { Circle, Dot, Label };
