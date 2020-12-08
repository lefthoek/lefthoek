/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Text, Box } from "theme-ui";
import { outerWrapperStyles, headingStyles, excerptStyles } from "./styles";

const PostHeader: FunctionComponent<{
  title: string;
  order: number;
  excerpt: string;
}> = ({ title, order, excerpt }) => {
  return (
    <Box sx={outerWrapperStyles}>
      <Heading sx={headingStyles}>{`00${order}`}</Heading>
      <Heading variant="display">{title}</Heading>
      <Box sx={excerptStyles}>
        <Text>{excerpt}</Text>
      </Box>
    </Box>
  );
};

export default PostHeader;
