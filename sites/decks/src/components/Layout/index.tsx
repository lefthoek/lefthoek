/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";

const Layout: FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        display: "grid",
        p: ["1rem", "2rem"],
        width: "100%",
        height: "100%",
        justifyContent: "stretch",
        alignContent: "stretch",
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
