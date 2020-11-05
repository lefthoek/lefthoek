/** @jsx jsx */
import { FunctionComponent, ElementType } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { Icon } from "@lefthoek/atoms";
import { Markdown } from "../../components/Markdown";
import { itemStyles } from "./styles";
import * as icons from "@lefthoek/icons";

const midnight = "#32334E";
const white = "#FCF2F5";
const whiteLight = "#FEFAFB";
const skyBlue = "#784CFB";
const skyBlueMedium = "#9370FC";
const skyBlueLight = "#AE94FD";
const skyBlueLightest = "#C9B7FD";
const lobster = "#D15B1B";
const lobsterMedium = "#DA7C49";
const lobsterLightest = "#EDBDA4";
const lobsterLight = "#E39D76";
const colors = {
  midnight,
  lobsterLight,
  lobsterMedium,
  lobsterLightest,
  white,
  whiteLight,
  skyBlue,
  skyBlueMedium,
  skyBlueLight,
  skyBlueLightest,
  lobster,
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
        <Icon iconName={title} />
      </Box>
      <Heading variant="display">{title}</Heading>
      <Markdown text={children} />
    </Box>
  );
};

export { SellingPoint };
