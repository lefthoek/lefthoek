/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import SlideMeta from "../SlideMeta";

const Layout: FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        display: "grid",
        gridTemplateRows: ["1fr 5rem"],
        p: ["1rem", "2rem"],
        width: "100%",
        height: "100%",
        justifyContent: "stretch",
        alignContent: "stretch",
      }}
    >
      {children}
      <SlideMeta />
    </Box>
  );
};

export default Layout;
