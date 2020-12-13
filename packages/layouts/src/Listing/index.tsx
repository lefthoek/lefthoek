/** @jsx jsx */
import { FunctionComponent, useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import { jsx } from "theme-ui";
import { Base } from "../Base";
import { Entry } from "./Entry";
import { MetaBox } from "./MetaBox";
import { outerWrapperStyles, itemStyles, metaBoxStyles } from "./styles";
import { IPost } from "@lefthoek/types/src";

type ListingProps = {
  entries: IPost[];
  variant?: "skyBlue" | "midnight";
};

const Listing: FunctionComponent<ListingProps> = ({
  entries,
  variant = "midnight",
}) => {
  const [currentPost, setCurrentPost] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  useEffect(() => {
    scrollYProgress.onChange(() => {
      setCurrentPost(Math.floor((entries.length - 1) * scrollYProgress.get()));
    });
  }, [entries.length, scrollYProgress]);
  return (
    <Base variant={variant} sx={outerWrapperStyles}>
      {entries.map(({ id, ...entry }: any, index: number) => {
        const isCurrentPost = index === currentPost;
        const isPreviousOrNext =
          index === currentPost + 1 || index === currentPost - 1;
        const highlightLevel = isCurrentPost
          ? "high"
          : isPreviousOrNext
          ? "low"
          : "off";
        return (
          <Entry
            variant={variant}
            sx={itemStyles}
            key={id}
            highlightLevel={highlightLevel}
            {...entry}
          />
        );
      })}
      <MetaBox sx={metaBoxStyles} {...entries[currentPost]} />
    </Base>
  );
};

export { Listing };
