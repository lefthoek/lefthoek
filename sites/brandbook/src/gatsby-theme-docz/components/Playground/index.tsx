/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, useThemeUI } from "theme-ui";
import { LiveProvider, LiveError, LivePreview, LiveEditor } from "react-live";

const transformCode = (code: string) => {
  if (code.startsWith("()") || code.startsWith("class")) return code;
  return `<React.Fragment>${code}</React.Fragment>`;
};

const Playground: FunctionComponent<{
  code: string;
  scope: any;
  language: any;
}> = ({ code, language, scope }) => {
  const { theme } = useThemeUI();
  return (
    <LiveProvider
      code={code}
      scope={scope}
      transformCode={transformCode}
      language={language}
      theme={theme.prism.light}
    >
      <LiveEditor />
      <LivePreview />
      <LiveError />
    </LiveProvider>
  );
};

export { Playground };
