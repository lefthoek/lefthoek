/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text } from "theme-ui";
import { titleCase, chain } from "voca";
import { lineStyles } from "./styles";
import { useBreakpointIndex } from "@theme-ui/match-media";

const shortMessage = "Well designed, found for you";
const longMessage = `
Our customers are designers, architects, creative people who enjoy curating their spaces to feel like home. They appreciate high-quality, thoughtful design. They are likely middle-class with some disposable income, and treat furnishing their home as an investment. They’d rather save up and buy well-designed, beautiful things rather than the cheapest things available just to get furnishing over with.
`;

const SampleLine: FunctionComponent<{
  className?: string;
  name: string;
  style: any;
  fonts: any;
  fontSizes: any;
}> = ({ className, name, style, fonts }) => {
  const index = useBreakpointIndex();
  const fontWeights = {
    900: "black",
    700: "bold",
    600: "semi bold",
    500: "medium",
    400: "regular",
  };

  const elementName = chain(name)
    .kebabCase()
    .replaceAll("-", " ")
    .titleCase()
    .value();
  const fontFamily = fonts[style.fontFamily].split(",")[0];
  const fontWeight = titleCase(fontWeights[style.fontWeight]);
  // const fontSize = fontSizes[style.fontSize || 0];
  const { fontSize, lineHeight } = style;
  const fs = fontSize[index] || fontSize[fontSize.length - 1];
  const lh = lineHeight[index] || lineHeight[lineHeight.length - 1];

  const description = `
         ${elementName} / ${fontFamily} ${fontWeight} / ${fs} / line-height: ${lh}
      `;
  return (
    <Box className={className}>
      <Text>{description}</Text>
      <Text variant={name}>
        {name === "body" || name === "smallBody" ? longMessage : shortMessage}
      </Text>
    </Box>
  );
};

export { SampleLine };
