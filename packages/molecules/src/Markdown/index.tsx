/** @jsx jsx */
import { createElement, FunctionComponent, Fragment, ReactNode } from "react";
import { jsx, Box } from "theme-ui";

import unified from "unified";
// @ts-ignore
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
// @ts-ignore
import remarkAttr from "remark-attr";
import rehype2react from "rehype-react";

var processor = unified()
  .use(markdown)
  .use(remarkAttr)
  .use(remark2rehype)
  .use(rehype2react, { createElement, Fragment });

const Markdown: FunctionComponent<{ children: string; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Box className={className} as="section">
      {processor.processSync(children).result as ReactNode}
    </Box>
  );
};

export { Markdown };
