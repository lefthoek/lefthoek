/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";

const Circle: FunctionComponent<{
  className?: string;
  r: number;
  depth?: number;
  cx: number;
  cy: number;
}> = ({ className, cx, cy, r, depth = 0 }) => {
  return (
    <circle
      className={className}
      sx={{
        fill: ({ gradients }: any) => gradients!.lobster[depth < 4 ? depth : 3],
      }}
      cx={cx}
      cy={cy}
      r={r}
    />
  );
};

const Dot: FunctionComponent<{
  className?: string;
  x: number;
  depth?: number;
  variant?: "highlight" | "normal";
  size: number;
  y: number;
}> = ({ x, y, variant, className, depth = 0, size }) => {
  const maxSize = 5;
  return (
    <Circle
      cx={x}
      cy={y}
      depth={depth}
      r={size < maxSize ? size : maxSize}
      sx={{
        fill: ({ colors, gradients }: any) =>
          variant === "highlight" ? colors.accent : gradients!.lobster[3],
      }}
      className={className}
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
