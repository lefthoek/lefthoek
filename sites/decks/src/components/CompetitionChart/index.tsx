/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, useThemeUI, Box, Heading } from "theme-ui";
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

const CompetitionChart: FunctionComponent<{ data: any }> = ({ data }) => {
  const { theme } = useThemeUI();
  // @ts-ignore
  const {
    virtualTeamMember,
    conversationalAI,
    knowledgeManagementTools,
    virtualAssistants,
  } = data;
  const colors = theme.colors;
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        maxHeight: ["85vh"],
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Heading sx={{ my: 3 }} variant="heading">
        Competition
      </Heading>
      <ResponsiveContainer
        sx={{ fontSize: 0, maxWidth: ["100%", "80vw"], alignSelf: "center" }}
      >
        <ScatterChart>
          <XAxis
            domain={[-10, 10]}
            padding={{ left: 0, right: 0 }}
            hide={true}
            type="number"
            dataKey={"automation"}
            name="automation"
          />
          <YAxis
            domain={[-10, 10]}
            padding={{ top: 30, bottom: 30 }}
            hide={true}
            type="number"
            dataKey={"importance"}
            name="importance"
          />
          <ZAxis dataKey={"relevance"} range={[200, 200]} name="scope" />
          <ReferenceArea
            x1={0}
            x2={10}
            y1={0}
            y2={10}
            opacity={0.25}
            fill={colors.secondary}
          />

          <ReferenceLine x={-10} opacity={0}>
            <Label value="manual" angle={-90} opacity={0.6} position="center" />
          </ReferenceLine>
          <ReferenceLine x={10} opacity={0}>
            <Label
              value="automated"
              angle={90}
              opacity={0.6}
              position="center"
            />
          </ReferenceLine>
          <ReferenceLine y={10} opacity={0}>
            <Label value="core business" opacity={0.6} position="center" />
          </ReferenceLine>
          <ReferenceLine y={-10} opacity={0}>
            <Label value="mundane tasks" opacity={0.6} position="center" />
          </ReferenceLine>

          <Scatter
            shape="star"
            legendType="star"
            name="Virtual Team Member"
            data={virtualTeamMember}
            fill={colors.primary}
          >
            <LabelList offset={10} position="bottom" dataKey="name" />
          </Scatter>
          <Scatter
            legendType="square"
            shape="square"
            name="Conversational AI"
            data={conversationalAI}
            fill={colors.text}
          >
            <LabelList offset={10} position="bottom" dataKey="name" />
          </Scatter>
          <Scatter
            legendType="circle"
            shape="circle"
            name="Knowledge Management Tools"
            data={knowledgeManagementTools}
            fill={colors.accent}
          >
            <LabelList offset={10} position="bottom" dataKey="name" />
          </Scatter>
          <Scatter
            legendType="triangle"
            shape="triangle"
            name="Virtual Assistants"
            data={virtualAssistants}
            fill={colors.secondary}
          >
            <LabelList offset={10} position="bottom" dataKey="name" />
          </Scatter>
          <Legend height={50} verticalAlign="top" />
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CompetitionChart;
