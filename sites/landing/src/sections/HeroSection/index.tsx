/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Text } from "theme-ui";
import { Section } from "../../components";

const HeroSection: FunctionComponent<{
  title: string;
  takeAway: string;
  className?: string;
}> = ({ className, title, takeAway }) => {
  return (
    <Section
      className={className}
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
        {title}
      </Heading>
      <Text as="p">{takeAway}</Text>
    </Section>
  );
};

export { HeroSection };
