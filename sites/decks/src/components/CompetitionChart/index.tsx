/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, useThemeUI, Box, Heading } from "theme-ui";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const sampleData = [
  {
    id: "competitors",
    data: [
      { name: "hubot", x: 0.7, y: -0.9 },
      { name: "virtual nanny", x: -0.7, y: 0.1 },
    ],
  },
  {
    id: "lefthoek",
    data: [{ name: "lefthoek", x: 0.6, y: 0.7 }],
  },
];

const CustomNode = ({
  node,
  x,
  y,
  color,
  size,
  blendMode,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onClick,
}) => {
  if (node.data.serieId === "lefthoek") {
    return (
      <g transform={`translate(${x},${y}) rotate(0)`}>
        <text
          x={0}
          y={0}
          fill={"red"}
          style={{ mixBlendMode: blendMode }}
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        >
          {node.data.name}
        </text>
      </g>
    );
  }
  return (
    <g transform={`translate(${x},${y}) rotate(0)`}>
      <text
        x={0}
        y={0}
        fill={color}
        style={{ mixBlendMode: blendMode }}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {node.data.name}
      </text>
    </g>
  );
};

const CompetitionChart: FunctionComponent = () => {
  const { theme } = useThemeUI();
  // @ts-ignore
  const colors = theme.primaryColors;
  return (
    <Box sx={{ height: "100%", width: "100%", maxHeight: "80vh" }}>
      <Heading sx={{ mb: 5 }} variant="heading">
        Competition
      </Heading>
      <ResponsiveScatterPlot
        blendMode="multiply"
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        xScale={{ type: "linear", min: -1, max: 1 }}
        yScale={{ type: "linear", min: -1, max: 1 }}
        enableGridX={false}
        enableGridY={false}
        colors={[colors.text, colors.accent]}
        data={sampleData}
        renderNode={CustomNode}
        axisTop={{
          orient: "top",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: [],
          legend: "core business",
          legendPosition: "middle",
          legendOffset: -20,
        }}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickValues: [],
          tickRotation: 0,
          legend: "repetitive chores",
          legendPosition: "middle",
          legendOffset: 20,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickValues: [],
          tickRotation: 0,
          legend: "manual",
          legendPosition: "middle",
          legendOffset: -20,
        }}
        axisRight={{
          orient: "right",
          tickSize: 5,
          tickValues: [],
          tickPadding: 5,
          tickRotation: 0,
          legend: "automated",
          legendPosition: "middle",
          legendOffset: 20,
        }}
      />
    </Box>
  );
};

export default CompetitionChart;
