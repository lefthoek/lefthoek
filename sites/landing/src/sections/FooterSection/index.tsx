/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Section } from "../../components";
import { LinkedIn, Email } from "./icons";
import { iconStyles } from "./styles";

const FooterSection: FunctionComponent = () => {
  return (
    <Section
      sx={{
        bg: "text",
        color: "muted",
        display: "flex",
        flexDirection: "row",
        justifyContent: ["center", "flex-end"],
        width: "100%",
        minHeight: "0vh",
          px: [4, 4, 4],
          py: [5,5,5],
      }}
    >
      <Box
        sx={{
          width: ["30%", "20%", "10%"],
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LinkedIn sx={iconStyles} />
        <Email sx={iconStyles} />
      </Box>
    </Section>
  );
};

export { FooterSection };
