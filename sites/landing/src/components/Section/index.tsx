/** @jsx jsx */
import { FunctionComponent, ElementType } from "react";
import { jsx, Box } from "theme-ui";

const Section: FunctionComponent<{
  as?: ElementType<any>;
  className?: string;
}> = ({ as = "div", children, className }) => {
  return (
    <Box
      as={as}
      className={className}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: ["center", "center"],
        alignItems: ["start", "start"],
        minHeight: "40vh",
        p: [4, 6],
        color: "text",
        bg: "muted",
      }}
    >
      {children}
    </Box>
  );
};

export { Section };
