/** @jsx jsx */
import { FunctionComponent } from "react";
import { Icon } from "@lefthoek/atoms";
import * as Icons from "@lefthoek/icons";
import { jsx, Box, Text } from "theme-ui";
import { IconName } from "@lefthoek/types";
import { containerStyles, iconContainerStyles } from "./styles";

const IconDisplay: FunctionComponent = () => {
  return (
    <Box sx={containerStyles}>
      {Object.keys(Icons).map((iconName: IconName) => {
        return (
          <Box sx={iconContainerStyles}>
            <Icon sx={{ mb: 4 }} iconName={iconName} />
            <Text variant="abstract">{iconName}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export { IconDisplay, Icon };
