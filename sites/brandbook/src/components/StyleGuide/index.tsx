/** @jsx jsx */
import { jsx, Styled, ThemeProvider } from "theme-ui";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";
import lefthoekTheme from "@lefthoek/ui-theme";

const StyleGuide = () => {
  return (
    <ThemeProvider theme={lefthoekTheme}>
      <Styled.h1>Style Guide</Styled.h1>
      <ColorPalette />
      <TypeScale />
      <TypeStyle
        fontFamily="heading"
        fontWeight="heading"
        lineHeight="heading"
      />
      <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
    </ThemeProvider>
  );
};

export { StyleGuide };
