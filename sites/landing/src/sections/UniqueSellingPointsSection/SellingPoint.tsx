/** @jsx jsx */
import { FunctionComponent, ElementType } from "react";
import { jsx, Box, AspectImage, Heading } from "theme-ui";
import { Markdown } from "../../components/Markdown";
import { itemStyles } from "./styles";

const SellingPoint: FunctionComponent<{
  className?: string;
  as?: ElementType<any>;
  title: string;
  children: string;
}> = ({ className, title, children, as }) => {
  return (
    <Box className={className} key={title} as={as} sx={itemStyles}>
      <Box sx={{ width: "70%" }}>
        <AspectImage
          src="https://upload.wikimedia.org/wikipedia/commons/3/36/DIN-8_Diagram.svg"
          ratio={1 / 1}
        />
      </Box>
      <Heading variant="display">{title}</Heading>
      <Markdown text={children} />
    </Box>
  );
};

export { SellingPoint };
