/** @jsx jsx */
import { FunctionComponent, ElementType } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { Markdown } from "../../components/Markdown";
import { itemStyles } from "./styles";

const Circle: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 100 100">
      <circle
        sx={{
          fill: ({ gradients }) => gradients.midnight[2],
          "&:hover": {
            fill: ({ gradients }) => gradients.midnight[0],
          },
        }}
        cx="50"
        cy="50"
        r="30"
      />
    </svg>
  );
};
const SellingPoint: FunctionComponent<{
  className?: string;
  as?: ElementType<any>;
  title: string;
  children: string;
}> = ({ className, title, children, as }) => {
  return (
    <Box className={className} key={title} as={as} sx={itemStyles}>
      <Box sx={{ width: "70%" }}>
        <Circle />
      </Box>
      <Heading variant="display">{title}</Heading>
      <Markdown text={children} />
    </Box>
  );
};

export { SellingPoint };
