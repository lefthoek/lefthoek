/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Text, Box } from "theme-ui";
import { IPost, IThemeable } from "@lefthoek/types";
import {
  definitionStyles,
  metaStyles,
  tagStyles,
  tagsStyles,
  excerptStyles,
} from "./styles";

type PostMetaProps = Pick<IPost, "author" | "date" | "tags" | "excerpt"> & {
  mode: "tags" | "excerpt";
} & IThemeable;

const PostMeta: FunctionComponent<PostMetaProps> = ({
  className,
  author,
  date,
  tags,
  excerpt,
  mode = "tags",
}) => {
  return (
    <Box className={className} sx={metaStyles}>
      {mode === "tags" ? (
        <Box sx={tagsStyles}>
          {tags.map((tag: string) => (
            <Text sx={tagStyles}>{tag}</Text>
          ))}
        </Box>
      ) : (
        <Text sx={excerptStyles}>{excerpt}</Text>
      )}
      <dl sx={definitionStyles}>
        <dt>Author</dt>
        <dd>{author}</dd>
        <dt>Date</dt>
        <dd>{date}</dd>
      </dl>
    </Box>
  );
};

export default PostMeta;
