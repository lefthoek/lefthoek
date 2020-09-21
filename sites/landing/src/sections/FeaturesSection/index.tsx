/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Box, Text } from "theme-ui";
import { Section } from "../../components";

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

export const Feature = ({ title, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Heading
        variant="title"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 4,
          border: "1px solid black",
          borderColor: "text",
          textAlign: "center",
          my: 4,
        }}
      >
        {title}
      </Heading>
      <Text as="p" sx={{ display: ["block", "none"] }}>
        {text}
      </Text>
    </Box>
  );
};

const FeaturesSection: FunctionComponent = () => {
  return (
    <Section sx={{ pt: 4 }}>
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
        <Feature title="Filter" text={textFilter} />
        <Feature title="Contextualize" text={textContextualize} />
        <Feature title="Enhance" text={textEnhance} />
      </Box>
      <Box
        sx={{
          display: ["none", "flex"],
        }}
      >
        <Text sx={{ width: "50%" }}>{textEnhance}</Text>
      </Box>
    </Section>
  );
};

export { FeaturesSection };
