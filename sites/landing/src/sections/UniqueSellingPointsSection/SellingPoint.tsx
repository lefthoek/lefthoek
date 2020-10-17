/** @jsx jsx */
import { FunctionComponent, ElementType } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { Markdown } from "../../components/Markdown";
import { itemStyles } from "./styles";
import * as icons from "./icons";

const SellingPoint: FunctionComponent<{
  className?: string;
  as?: ElementType<any>;
  title: string;
  children: string;
}> = ({ className, title, children, as }) => {
  const Icon = icons[title] || icons["Bespoke"];
  return (
    <Box className={className} key={title} as={as} sx={itemStyles}>

      <Box sx={{width: "70%"}}>
      <Icon />
      </Box>
      <Heading variant="display">{title}</Heading>
      <Markdown text={children} />
    </Box>
  );
};

export { SellingPoint };
