/** @jsx jsx */

import { FunctionComponent } from "react";
import { jsx, Heading, Box, Text } from "theme-ui";
import { Link } from "gatsby";
import { itemStyles, titleStyles } from "./styles";
import { IPost, IThemeable } from "@lefthoek/types/src";

const Entry: FunctionComponent<
  IPost &
    IThemeable & {
      variant?: "skyBlue" | "midnight";
      order: number;
      highlightLevel: "high" | "low" | "off";
    }
> = ({
  className,
  variant = "skyBlue",
  slug,
  order,
  title,
  highlightLevel,
}) => {
  return (
    <Link className={className} sx={itemStyles} to={slug}>
      <Box sx={titleStyles({ variant, highlightLevel })}>
        <Text
          sx={{
            fontWeight: 500,
            p: 3,
          }}
        >{`00${order}`}</Text>
        <Heading variant="display">{title}</Heading>
      </Box>
    </Link>
  );
};

export { Entry };
