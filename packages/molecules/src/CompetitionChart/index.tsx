/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, useThemeUI } from "theme-ui";
// @ts-ignore
import { useResponsiveValue } from "@theme-ui/match-media";

import {
  Legend,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Label,
  LabelList,
  ReferenceLine,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";
import { outerWrapperStyles } from "./styles";
import { createAreaData } from "./helpers";
import { Measure, CompetitionData } from "@lefthoek/types";
type ChartColors = Record<
  "primary" | "text" | "highlight" | "secondary",
  string
>;
type CompetitionChartProps = {
  analysis: Record<string, CompetitionData>;
  domain?: [number, number];
  measures: Measure[];
  colors?: ChartColors;
  className?: string;
};

const CompetitionChart: FunctionComponent<CompetitionChartProps> = ({
  analysis,
  measures,
  domain = [-10, 10],
  colors,
  className,
}) => {
  const complex = useResponsiveValue([false, true]);
  const [minVal, maxVal] = domain;
  const { theme } = useThemeUI();
  const chartColors: ChartColors =
    colors || ({ ...theme.colors, text: theme?.colors?.muted } as ChartColors);
  const avg = minVal + maxVal;
  const areas = Object.entries(analysis).map(createAreaData);
  const [measureX, measureY, measureZ] = measures;
  const lines = [
    { x: avg, opacity: 0.1 },
    { y: avg, opacity: 0.1 },
    { y: maxVal, value: measureY.maxName, angle: 0 },
    { x: maxVal, value: measureX.maxName, angle: 90 },
    { y: minVal, value: measureY.minName, angle: 180 },
    { x: minVal, value: measureX.minName, angle: 270 },
  ];

  return (
    <ResponsiveContainer className={className} sx={outerWrapperStyles}>
      <ScatterChart>
        <XAxis
          domain={domain}
          padding={{ left: 0, right: 0 }}
          hide={true}
          type="number"
          dataKey={measureX.dataKey}
          name={measureX.dataKey}
        />

        <YAxis
          domain={domain}
          padding={{ top: 0, bottom: 0 }}
          hide={true}
          type="number"
          dataKey={measureY.dataKey}
          name={measureY.dataKey}
        />

        <ZAxis
          dataKey={measureZ.dataKey}
          range={[200, 200]}
          name={measureZ.dataKey}
        />

        <ReferenceArea
          x1={avg}
          x2={maxVal}
          y1={avg}
          y2={maxVal}
          opacity={0.2}
          fill={chartColors.secondary}
        />

        <Legend
          height={200}
          wrapperStyle={{ bottom: -100 }}
          verticalAlign={false ? "top" : "bottom"}
        />

        {lines.map(({ x, y, value, opacity, angle }) => (
          <ReferenceLine x={x} y={y} opacity={opacity || 0}>
            {value && (
              <Label
                className={`axis-label axis-label-${angle}`}
                angle={angle}
                value={value}
                position="center"
              />
            )}
          </ReferenceLine>
        ))}
        {areas.map(({ shape, name, data, color }, index) => {
          const highlights = data.length > 1 ? [data[0], data[1]] : [data[0]];
          return (
            <Scatter
              shape={shape}
              legendType={shape}
              name={name}
              data={complex ? data : highlights}
              opacity={index === 0 ? 1 : 0.6}
              fill={chartColors[color]}
            >
              <LabelList
                className={`scatter-group group-${index}`}
                offset={10}
                position="bottom"
                dataKey="name"
              />
            </Scatter>
          );
        })}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export { CompetitionChart };
