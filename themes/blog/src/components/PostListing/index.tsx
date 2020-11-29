/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Box } from "theme-ui";
import { Link } from "gatsby";
import {
  outerWrapperStyles,
  itemStyles,
  innerWrapperStyles,
  titleStyles,
} from "./styles";
import { IPost } from "@lefthoek/types/src";

type PostListingProps = {
  currentPost: number;
  entries: IPost[];
};

const PostListing: FunctionComponent<PostListingProps> = ({
  entries,
  currentPost,
}) => {
  return (
    <Box sx={outerWrapperStyles}>
      {entries.map(({ id, slug, title }: any, index: number) => {
        const isCurrentPost = index === currentPost;
        const isPreviousOrNext = currentPost + 1 || index === currentPost - 1;
        const highlightLevel = isCurrentPost
          ? "high"
          : isPreviousOrNext
          ? "low"
          : "off";
        return (
          <Link key={id} sx={itemStyles} to={slug}>
            <Box sx={innerWrapperStyles}>
              <Heading sx={titleStyles({ highlightLevel })} variant="display">
                {title}
              </Heading>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default PostListing;
