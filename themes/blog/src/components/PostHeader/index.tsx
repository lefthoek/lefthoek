/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Box } from "theme-ui";
import { IPost } from "@lefthoek/types";
import { Link } from "gatsby";
import { outerWrapperStyles, innerWrapperStyles } from "./styles";

type PostHeaderProps = Pick<
  IPost,
  "slug" | "title" | "coverImage" | "excerpt" | "author" | "date" | "tags"
> & { isOdd?: boolean; isFullPost?: boolean };

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  slug,
  title,
  highlightLevel,
}) => {
  return (
    <Link sx={outerWrapperStyles} to={slug}>
      <Box sx={innerWrapperStyles}>
        <Heading
          sx={{
            "&:hover": {
              color: "accent",
            },
            color: ({ gradients }) =>
              highlightLevel === "high"
                ? "muted"
                : highlightLevel === "low"
                ? gradients.midnight[1]
                : gradients.midnight[2],
          }}
          variant="display"
        >
          {title}
        </Heading>
      </Box>
    </Link>
  );
};

export default PostHeader;
