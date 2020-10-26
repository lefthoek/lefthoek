/** @jsx jsx */
import { FunctionComponent, ElementType } from "react";
import { capitalize } from "voca";
import { jsx, Box, Heading } from "theme-ui";
import { Markdown } from "../Markdown";
import { Icon } from "@lefthoek/atoms";
import { itemStyles } from "./styles";

const SellingPoint: FunctionComponent<{
  className?: string;
  as?: ElementType<any>;
  title: string;
  children: string;
}> = ({ className, title = "bespoke", children, as }) => {
  const displayTitle = capitalize(title);
  return (
    <Box className={className} key={title} as={as} sx={itemStyles}>
      <Box sx={{ width: "70%" }}>
        <Icon iconName={displayTitle} />
      </Box>
      <Box>
        <Heading variant="display">{displayTitle}</Heading>
        <Markdown text={children} />
      </Box>
    </Box>
  );
};

export { SellingPoint };
