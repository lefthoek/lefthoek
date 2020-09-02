/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
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

type CompetitionChartProps = {
  analysis: Record<string, CompetitionData>;
  domain?: [number, number];
  measures: Measure[];
  colors?: Record<"primary" | "text" | "highlight" | "secondary", string>;
  className?: string;
};

const CompetitionChart: FunctionComponent<CompetitionChartProps> = ({
  analysis,
  measures,
  domain = [-10, 10],
  colors = { primary: "red", text: "black", highlight: "black", secondary: "black" },
  className,
}) => {
  const [minVal, maxVal] = domain;
  const avg = minVal + maxVal;
  const areas = Object.entries(analysis).map(createAreaData);
  const [measureX, measureY, measureZ] = measures;
  const lines = [
    { x: avg, opacity: 0.5 },
    { y: avg, opacity: 0.5 },
    { x: minVal, value: measureX.minName },
    { x: maxVal, value: measureX.maxName },
    { y: minVal, value: measureY.minName },
    { y: maxVal, value: measureY.maxName },
  ];

  return (
    <ResponsiveContainer className={className} sx={outerWrapperStyles}>
      <ScatterChart>
        <XAxis
          domain={domain}
          padding={{ left: 10, right: 10 }}
          hide={true}
          type="number"
          dataKey={measureX.dataKey}
          name={measureX.dataKey}
        />

        <YAxis
          domain={domain}
          padding={{ top: 10, bottom: 10 }}
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
          opacity={0.25}
          fill={colors.secondary}
        />

        <Legend height={70} verticalAlign="top" />

        {lines.map(({ x, y, value, opacity }) => (
          <ReferenceLine x={x} y={y} opacity={opacity || 0}>
            {value && (
              <Label
                value={value}
                angle={x ? x * 9 : 0}
                opacity={0.6}
                position="center"
              />
            )}
          </ReferenceLine>
        ))}

        {areas.map(({ shape, name, data, color }) => (
          <Scatter
            shape={shape}
            legendType={shape}
            name={name}
            data={data}
            fill={colors[color]}
          >
            <LabelList offset={10} position="bottom" dataKey="name" />
          </Scatter>
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export { CompetitionChart };
