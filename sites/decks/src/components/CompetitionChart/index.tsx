/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, useThemeUI, Box, Heading } from "theme-ui";
import {
  Cell,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Label,
  LabelList,
  ReferenceLine,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

const CompetitionChart: FunctionComponent<{ data: any[] }> = ({ data }) => {
  const { theme } = useThemeUI();
  // @ts-ignore
  const colors = theme.colors;
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        maxHeight: ["80vh", "100%"],
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Heading sx={{ my: 3 }} variant="heading">
        Competition
      </Heading>
      <ResponsiveContainer
        sx={{ maxWidth: ["100%", "80vw"], alignSelf: "center" }}
      >
        <ScatterChart>
          <XAxis
            domain={[-1, 1]}
            padding={{ left: 15, right: 15 }}
            hide={true}
            type="number"
            dataKey={"automation"}
            name="automation"
          />
          <YAxis
            domain={[-1, 1]}
            padding={{ top: 15, bottom: 15 }}
            hide={true}
            type="number"
            dataKey={"importance"}
            name="importance"
          />
          <ReferenceArea
            x1={0}
            x2={1}
            y1={0}
            y2={1}
            opacity={0.5}
            fill={colors.secondary}
          />
          <ReferenceLine y={0} opacity={0.5} stroke={colors.secondary} />
          <ReferenceLine x={0} opacity={0.5} stroke={colors.secondary} />
          <ReferenceLine x={-1} opacity={0}>
            <Label value="manual" angle={-90} opacity={0.6} position="center" />
          </ReferenceLine>
          <ReferenceLine x={1} opacity={0}>
            <Label
              value="automated"
              angle={90}
              opacity={0.6}
              position="center"
            />
          </ReferenceLine>
          <ReferenceLine y={1} opacity={0}>
            <Label value="core business" opacity={0.6} position="center" />
          </ReferenceLine>
          <ReferenceLine y={-1} opacity={0}>
            <Label value="chores" opacity={0.6} position="center" />
          </ReferenceLine>
          <Scatter
            name="A school"
            line={false}
            data={data}
            fill={colors.primary}
            shape={() => null}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.highlight ? colors.primary : colors.text}
              />
            ))}
            <LabelList dataKey="name" />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CompetitionChart;
