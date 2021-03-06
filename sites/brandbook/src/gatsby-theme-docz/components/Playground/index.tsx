/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, useThemeUI } from "theme-ui";
import { LiveProvider, LiveError, LivePreview, LiveEditor } from "react-live";

const transformCode = (code: string) => {
  if (code.startsWith("()") || code.startsWith("class")) return code;
  return `<React.Fragment>${code}</React.Fragment>`;
};

const Playground: FunctionComponent<{
  code: string;
  scope: any;
  colorMode: string;
  language: any;
  className?: string;
}> = ({ colorMode = "muted", code, language, scope, ...rest }) => {
  const { theme } = useThemeUI();
  return (
    <LiveProvider
      code={code}
      scope={scope}
      transformCode={transformCode}
      language={language}
      theme={theme.prism.light}
    >
      <LiveEditor sx={{ mb: 8 }} />
      <Box>
        <LivePreview
          sx={{
            bg: colorMode,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        />
      </Box>
      <LiveError />
    </LiveProvider>
  );
};

export { Playground };
