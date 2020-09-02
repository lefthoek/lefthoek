/** @jsx jsx */
import { FunctionComponent } from "react";
import { CompetitionChart } from "@lefthoek/molecules";
import { jsx, useThemeUI, Box, Heading } from "theme-ui";
import { outerWrapperStyles, headingStyles, chartStyles } from "./styles";

const CompetitionChartLayout: FunctionComponent<{ data: any }> = ({ data }) => {
  const { theme } = useThemeUI();
  const colors = theme.colors;
  const { measures, analysis } = data;

  return (
    <Box sx={outerWrapperStyles}>
      <Heading sx={headingStyles} variant="heading">
        Competition
      </Heading>
      <CompetitionChart
        sx={chartStyles}
        measures={measures}
        colors={colors as Record<string, string>}
        analysis={analysis}
      />
    </Box>
  );
};

export default CompetitionChartLayout;
