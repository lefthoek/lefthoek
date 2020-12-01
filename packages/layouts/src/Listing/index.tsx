/** @jsx jsx */
import { FunctionComponent, useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import { jsx, Heading, Box, Text } from "theme-ui";
import { Base } from "../Base";
import { Link } from "gatsby";
import { outerWrapperStyles, itemStyles, titleStyles } from "./styles";
import { IPost } from "@lefthoek/types/src";

type ListingProps = {
  entries: IPost[];
};

const Listing: FunctionComponent<ListingProps> = ({ entries }) => {
  const [currentPost, setCurrentPost] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  useEffect(() => {
    scrollYProgress.onChange(() => {
      setCurrentPost(Math.floor((entries.length - 1) * scrollYProgress.get()));
    });
  }, [entries.length, scrollYProgress]);
  const { excerpt } = entries[currentPost];
  return (
    <Base>
      <Box sx={outerWrapperStyles}>
        {entries.map(({ id, slug, title, order }: any, index: number) => {
          const isCurrentPost = index === currentPost;
          const isPreviousOrNext =
            index === currentPost + 1 || index === currentPost - 1;
          const highlightLevel = isCurrentPost
            ? "high"
            : isPreviousOrNext
            ? "low"
            : "off";
          return (
            <Link key={id} sx={itemStyles} to={slug}>
              <Box sx={titleStyles({ highlightLevel })}>
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
        })}
      </Box>
      <Box
        sx={{
          display: ["none", "none", "flex"],
          alignItems: "flex-end",
          m: [0, 0, 7, 8],
          position: "fixed",
          color: "muted",
          bottom: 0,
          right: 0,
          width: "20rem",
          maxHeight: "30rem",
        }}
      >
        <Text>{excerpt}</Text>
      </Box>
    </Base>
  );
};

export { Listing };
