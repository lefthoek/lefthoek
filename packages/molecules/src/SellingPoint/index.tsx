/** @jsx jsx */
import { FunctionComponent, ElementType } from "react";
import { capitalize } from "voca";
import { jsx, Box, Heading } from "theme-ui";
import { Markdown } from "../Markdown";
import { Icon } from "@lefthoek/atoms";
import { itemStyles } from "./styles";
import { IconName } from "@lefthoek/types";

const SellingPoint: FunctionComponent<{
  className?: string;
  as?: ElementType<any>;
  title: string;
  src?: string;
  iconName?: IconName;
  children: string;
}> = ({
  className,
  title = "bespoke",
  iconName = "Placeholder",
  src,
  children,
  as,
}) => {
  console.log(src);
  const displayTitle = capitalize(title);
  return (
    <Box className={className} key={title} as={as} sx={itemStyles}>
      <Box sx={{ width: "70%" }}>
        {src ? (
          <img sx={{ maxWidth: "100%" }} src={src} />
        ) : (
          <Icon iconName={iconName || displayTitle} />
        )}
      </Box>
      <Box>
        <Heading variant="abstract">{displayTitle}</Heading>
        <Markdown>{children}</Markdown>
      </Box>
    </Box>
  );
};

export { SellingPoint };
