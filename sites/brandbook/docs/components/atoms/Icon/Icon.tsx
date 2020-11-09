/** @jsx jsx */
import { FunctionComponent } from "react";
import { Icon } from "@lefthoek/atoms";
import * as Icons from "@lefthoek/icons";
import { jsx, Box, Text } from "theme-ui";

const IconDisplay: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "grid",
        p: [4],
        gridGap: [4],
        gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr"],
      }}
    >
      {Object.keys(Icons).map((iconName) => {
        return (
          <Box
            sx={{
              display: "flex",
              p: 4,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon sx={{ mb: 4 }} iconName={iconName} />
            <Text variant="titoletto">{iconName}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export { IconDisplay, Icon };
