/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx, Heading, Box, Text } from "theme-ui";
import { Feature, Section } from "../../components";

const textFilter = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
  eu volutpat odio facilisis mauris sit amet. Risus nec feugiat in
  fermentum. Integer quis auctor elit sed. At imperdiet dui accumsan sit
  amet nulla facilisi.

  Tempus iaculis urna id volutpat lacus. Semper
  auctor neque vitae tempus quam pellentesque nec nam. Morbi tristique
  senectus et netus et malesuada fames ac. 
`;

const textContextualize = `
  Tempus iaculis urna id volutpat lacus. Semper
  auctor neque vitae tempus quam pellentesque nec nam. Morbi tristique
  senectus et netus et malesuada fames ac. Tortor vitae purus faucibus
  ornare suspendisse sed nisi lacus sed. Maecenas pharetra convallis
  posuere morbi leo urna. Lacinia at quis risus sed vulputate odio ut
  enim blandit. 

  Nunc lobortis mattis aliquam faucibus purus in. Velit
  sed ullamcorper morbi tincidunt ornare massa eget. 
  `;

const textEnhance = `
  Nunc lobortis mattis aliquam faucibus purus in. Velit
  sed ullamcorper morbi tincidunt ornare massa eget. Ultrices sagittis
  orci a scelerisue purus semper eget duis at. 
  
  Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.
  Id aliquet risus feugiat in ante. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.  
`;

const texts = {
  filter: textFilter,
  contextualize: textContextualize,
  enhance: textEnhance,
};

const FeaturesSection: FunctionComponent = () => {
  const [selectedText, selectText] = useState("filter");
  const onSelect = ({ title }) => selectText(title);
  return (
    <Section sx={{ py: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: ["start", "center"],
          my: 4,
          width: "100%",
        }}
      >
        <Heading sx={{ mb: 4 }} variant="display">
          An Amazing Slogan
        </Heading>
        <Heading as="h3" variant="abstract">
          Something Even Better
        </Heading>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          width: "100%",
          mb: 4,
          justifyContent: ["space-between", "space-between", "space-between"],
        }}
      >
        {Object.entries(texts).map(([title, text]) => {
          return (
            <Feature
              onSelect={onSelect}
              isSelected={title === selectedText}
              title={title}
              text={text}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          display: ["none", "flex"],
        }}
      >
        <Text sx={{ width: "50%" }}>{texts[selectedText]}</Text>
      </Box>
    </Section>
  );
};

export { FeaturesSection };
