/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Text } from "theme-ui";
import { Section } from "../../components";

const HeroSection: FunctionComponent = () => {
  return (
    <Section
      sx={{
        overflow: "hidden",
        bg: "primary",
        color: "muted",
        top: 0,
        zIndex: 10,
        width: "100%",
        flex: 1,
      }}
    >
      <Heading sx={{ textAlign: "left", mb: 3 }} variant="display">
        Lefthoek
      </Heading>
      <Text as="p">Cutting Corners as a Service</Text>
    </Section>
  );
};

export { HeroSection };
