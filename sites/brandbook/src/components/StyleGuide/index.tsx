/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading, useThemeUI, Text } from "theme-ui";
import { ColorGradients } from "./ColorGradient";
import { ColorPalette } from "./ColorPalette";
import { SampleLine } from "./Typography";
import { wrapperStyles, lineStyles, sectionStyles } from "./styles";

const Section: FunctionComponent<{ title: string }> = ({ children, title }) => {
  return (
    <Box sx={sectionStyles}>
      <Heading as="h1" variant="sectionHeading">
        {title}
      </Heading>
      {children}
    </Box>
  );
};

const StyleGuide: FunctionComponent<{ message: string }> = ({ message }) => {
  const { theme } = useThemeUI();
  const { primaryColors, text, fontSizes, fonts } = theme;
  return (
    <Box sx={wrapperStyles}>
      <Section title="colors">
        <Text>{message}</Text>
        <ColorPalette colors={primaryColors} />
        <ColorGradients colors={primaryColors} />
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
