/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";

const DisplayContainer: FunctionComponent<{ colorMode: string }> = ({
  children,
  colorMode = "muted",
}) => {
  return (
    <Box
      sx={{
        bg: colorMode,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          alignSelf: "center",
          display: ["grid"],
          gridTemplateColumns: ["1fr"],
          py: ["16rem"],
          gridRowGap: ["16rem"],
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export { DisplayContainer };
