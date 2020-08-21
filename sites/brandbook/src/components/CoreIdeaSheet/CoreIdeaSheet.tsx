/** @jsx jsx */
import { jsx, Card, Box, Heading } from "theme-ui";
import { FunctionComponent } from "react";
import { capitalize } from "voca";

type CoreIdea = {
  goal: string;
  idea: string;
  context: string[];
  usps: string[];
  requirements: string[];
};

const sectionStyle = {
  p: 3,
  bg: "muted",
};

const sheetStyle = {
  display: "grid",
  gridTemplateColumns: ["1fr", "3fr 4fr"],
  gridTemplateRows: ["auto", "repeat(3, 1fr)"],
  gridGap: 3,
  ".context": {
    gridRow: "2/4",
  },
};

const CoreIdeaSheet: FunctionComponent<CoreIdea> = (props) => {
  return (
    <Card sx={sheetStyle}>
      {Object.entries(props).map(([key, value]) => {
        return (
          <Box key={key} className={key} sx={sectionStyle}>
            <Heading sx={{ mb: 3 }} variant="smallHeading">
              {capitalize(key)}
            </Heading>
            {typeof value === "string" ? (
              value
            ) : (
              <ul>
                {value.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            )}
          </Box>
        );
      })}
    </Card>
  );
};

export { CoreIdeaSheet };
