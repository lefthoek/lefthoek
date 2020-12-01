/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text } from "theme-ui";
import { metaBoxStyles } from "./styles";
import { IPost, IThemeable } from "@lefthoek/types/src";

const MetaBox: FunctionComponent<IPost & IThemeable> = ({
  className,
  excerpt,
  date,
  author,
}) => {
  return (
    <Box className={className} sx={metaBoxStyles}>
      <Text sx={{ textAlign: "left", mb: 2, fontStyle: "italic" }}>{date}</Text>
      <Text>{excerpt}</Text>
      <Text sx={{ mt: 2, color: "accent", textAlign: "right" }}>{author}</Text>
    </Box>
  );
};

export { MetaBox };
