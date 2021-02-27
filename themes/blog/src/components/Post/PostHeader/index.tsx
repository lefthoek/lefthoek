/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Box } from "theme-ui";
import { outerWrapperStyles, headingStyles } from "./styles";

const PostHeader: FunctionComponent<{
  title: string;
  order: number;
  excerpt: string;
}> = ({ title, order }) => {
  return (
    <Box sx={outerWrapperStyles}>
      <Heading sx={headingStyles}>{`00${order}`}</Heading>
      <Heading variant="display">{title}</Heading>
    </Box>
  );
};

export default PostHeader;
