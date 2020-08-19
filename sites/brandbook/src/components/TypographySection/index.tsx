/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, useThemeUI, Text } from "theme-ui";
import { titleCase, chain } from "voca";

const shortMessage = "Well designed, found for you";
const longMessage = `
Our customers are designers, architects, creative people who enjoy curating their spaces to feel like home. They appreciate high-quality, thoughtful design. They are likely middle-class with some disposable income, and treat furnishing their home as an investment. They’d rather save up and buy well-designed, beautiful things rather than the cheapest things available just to get furnishing over with.
`;

const TypographySection: FunctionComponent<{
  message: string;
  className: string;
}> = ({ message, className }) => {
  const { theme } = useThemeUI();
  const { text, fontSizes, fonts, lineHeights } = theme;

  return (
    <Box
      className={className}
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridRowGap: ["2rem", "4rem"],
        maxWidth: "1000px",
        my: ["2rem", "4rem"],
      }}
    >
      {Object.entries(text).map(([key, value]) => {
        const fontWeights = {
          700: "bold",
          600: "semi bold",
          500: "medium",
          400: "regular",
        };

        const fontFamily = fonts[value.fontFamily].split(",")[0];
        const fontWeight = fontWeights[value?.fontWeight];
        return (
          <Box>
            <Text sx={{ mb: "1rem" }}>
              {chain(key).kebabCase().replaceAll("-", " ").titleCase().value()}{" "}
              / {fontFamily} {titleCase(fontWeight)} /{" "}
              {fontSizes[value?.fontSize || 0]}px / line-height:{" "}
              {value.lineHeight}
            </Text>
            <Text variant={key}>
              {key === "body" || key === "smallBody"
                ? longMessage
                : shortMessage}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export { TypographySection };
