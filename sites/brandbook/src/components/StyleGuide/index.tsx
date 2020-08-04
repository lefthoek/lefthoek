/** @jsx jsx */
import { jsx, Styled, ThemeProvider } from "theme-ui";
import { useDocs } from "docz";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";
import lefthoekTheme from "@lefthoek/ui-theme";

const StyleGuide = () => {
  const docs = useDocs();
  console.log(docs);
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
