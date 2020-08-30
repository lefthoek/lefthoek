/** @jsx jsx */
import { FunctionComponent } from "react";
import { CompetitionChart } from "@lefthoek/molecules";
import { jsx, useThemeUI, Box, Heading } from "theme-ui";

const CompetitionChartLayout: FunctionComponent<{ data: any }> = ({ data }) => {
  const { theme } = useThemeUI();
  // @ts-ignore
  const colors = theme.colors;

  const dataLabels = {
    x: { dataKey: "automation", minName: "manual", maxName: "automated" },
    y: {
      dataKey: "importance",
      minName: "mundane tasks",
      maxName: "core business",
    },
    z: {
      dataKey: "relevance",
      minName: "irrelevant",
      maxName: "highly relevant",
    },
  };
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
      <CompetitionChart
        dataLabels={dataLabels}
        sx={{
          maxWidth: ["100%", "80vw"],
          alignSelf: "center",
        }}
        colors={colors}
        data={data}
      />
    </Box>
  );
};

export default CompetitionChartLayout;
