/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { chain } from "voca";
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

type AreaData = {
  shape: "circle" | "square" | "star" | "triangle";
  name: string;
  data: any;
  color: string;
};

const processName = (name: string) =>
  chain(name).kebabCase().replaceAll("-", " ").titleCase().value();

const CompetitionChart: FunctionComponent<{
  data: any;
  domain?: [number, number];
  dataLabels: any;
  colors: any;
  className?: string;
}> = ({ data, dataLabels, domain = [-10, 10], colors, className }) => {
  const [minVal, maxVal] = domain;
  const avg = minVal + maxVal;
  const visuals = [
    ["star", colors.primary],
    ["square", colors.text],
    ["circle", colors.highlight],
    ["triangle", colors.secondary],
  ];

  const areas: AreaData[] = Object.entries(data).map(([key, data], index) => {
    const [shape, color] = visuals[index % visuals.length];
    const name = processName(key);
    return {
      shape,
      name,
      data,
      color,
    };
  });

  const lines = [
    { x: avg, opacity: 0.5 },
    { y: avg, opacity: 0.5 },
    { x: minVal, value: dataLabels.x.minName },
    { x: maxVal, value: dataLabels.x.maxName },
    { y: minVal, value: dataLabels.y.minName },
    { y: maxVal, value: dataLabels.y.maxName },
  ];

  return (
    <ResponsiveContainer className={className} sx={outerWrapperStyles}>
      <ScatterChart>
        <XAxis
          domain={domain}
          padding={{ left: 10, right: 10 }}
          hide={true}
          type="number"
          dataKey={dataLabels.x.dataKey}
          name={dataLabels.x.dataKey}
        />
        <YAxis
          domain={domain}
          padding={{ top: 10, bottom: 10 }}
          hide={true}
          type="number"
          dataKey={dataLabels.y.dataKey}
          name={dataLabels.y.dataKey}
        />
        <ZAxis
          dataKey={dataLabels.z.dataKey}
          range={[200, 200]}
          name={dataLabels.z.dataKey}
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
            fill={color}
          >
            <LabelList offset={10} position="bottom" dataKey="name" />
          </Scatter>
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export { CompetitionChart };
