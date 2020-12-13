/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { IPost } from "@lefthoek/types/src";
import PostHeader from "./PostHeader";
import { innerWrapperStyles, textContainerStyles } from "./styles";

const Post: FunctionComponent<IPost> = ({ body, title, excerpt, order }) => {
  return (
    <Box sx={innerWrapperStyles} as="article">
      <PostHeader title={title} excerpt={excerpt} order={order} />
      <Box sx={textContainerStyles}>
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </Box>
  );
};

export default Post;
