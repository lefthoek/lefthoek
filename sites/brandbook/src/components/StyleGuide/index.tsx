/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Button, Heading, useThemeUI, Text } from "theme-ui";
import { useBreakpointIndex } from "@theme-ui/match-media";
import { ColorGradients } from "./ColorGradient";
import { ColorPalette } from "./ColorPalette";
import { SampleLine } from "./Typography";
import { titleCase } from "voca";
import { wrapperStyles, lineStyles, sectionStyles } from "./styles";

const Section: FunctionComponent<{ title: string }> = ({ children, title }) => {
  return (
    <Box sx={sectionStyles}>
      <Heading as="h2" variant="smallAbstract">
        {titleCase(title)}
      </Heading>
      {children}
    </Box>
  );
};

const StyleGuide: FunctionComponent<{ message: string }> = ({ message }) => {
  const breakpointIndex = useBreakpointIndex();
  const { theme } = useThemeUI();
  const { gradients, primaryColors, text, buttons, fontSizes, fonts } = theme;
  return (
    <Box sx={wrapperStyles}>
      <Section title="colors">
        <Text as="p">{message}</Text>
        <ColorPalette colors={primaryColors} />
        <ColorGradients gradients={gradients} colors={primaryColors} />
      </Section>
      <Section title="typography">
        {Object.entries(text).map(([key, value]) => (
          <SampleLine
            sx={lineStyles}
            name={key}
            style={value}
            fonts={fonts}
            fontSizes={fontSizes}
          />
        ))}
      </Section>
    </Box>
  );
};

export { StyleGuide };
