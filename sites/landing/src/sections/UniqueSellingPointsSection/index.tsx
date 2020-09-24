/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Box } from "theme-ui";
import { Section } from "../../components";
import { Stat } from "@lefthoek/molecules";
import {
  outerWrapperStyles,
  headerWrapperStyles,
  innerWrapperStyles,
} from "./styles";

const sampleText = `
  Morbi iaculis quam vitae viverra hendrerit. Etiam hendrerit venenatis
  lectus, vel ultrices velit dapibus sed. Curabitur metus tortor, vehicula
  et tellus vel, ornare placerat tellus.
`;

const figures: Record<string, string> = {
  "24/7": sampleText,
  "Super Human": sampleText,
  "Local AI": sampleText,
  Bespoke: sampleText,
  "Auto Improves": sampleText,
};

const UniqueSellingPointsSection: FunctionComponent = () => {
  return (
    <Section sx={outerWrapperStyles}>
      <Box sx={headerWrapperStyles}>
        <Heading variant="display">What Makes Lefthoek Different</Heading>
        <Heading as="h3" variant="abstract">
          We Do This Great
        </Heading>
      </Box>
      <Box as="ul" sx={innerWrapperStyles}>
        {Object.entries(figures).map(([figure, text], index) => (
          <Stat
            sx={{ mb: 0 }}
            imageURL="https://upload.wikimedia.org/wikipedia/commons/3/36/DIN-8_Diagram.svg"
            className={`stat-${index}`}
            figure={figure}
            reference="https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
          >
            {text}
          </Stat>
        ))}
      </Box>
    </Section>
  );
};

export { UniqueSellingPointsSection };
