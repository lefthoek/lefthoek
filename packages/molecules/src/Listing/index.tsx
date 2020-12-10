/** @jsx jsx */
import { FunctionComponent, Fragment } from "react";
import { jsx } from "theme-ui";
import { Entry } from "./Entry";
import { itemStyles } from "./styles";
import { IPost } from "@lefthoek/types/src";

type ListingProps = {
  entries: IPost[];
  currentPost: number;
  variant?: "skyBlue" | "midnight";
};

const Listing: FunctionComponent<ListingProps> = ({
  entries,
  currentPost,
  variant = "midnight",
}) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export { Listing };
