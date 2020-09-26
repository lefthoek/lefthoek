/** @jsx jsx */
import { createElement, FunctionComponent, Fragment} from "react";
import { jsx, Box } from "theme-ui";

import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";

var processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement, Fragment});

const Markdown: FunctionComponent<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <Box className={className} as="section">
      {processor.processSync(text).result}
    </Box>
  );
};

export { Markdown };
