/** @jsx jsx */
import { useState } from "react";
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { Background } from "@lefthoek/atoms";

const DisplayContainer: FunctionComponent<{ colorMode: string }> = ({
  children,
  colorMode = "muted",
}) => {
  const [isFullScreen, setFullScreenMode] = useState(false);
  const baseStyles = { bg: colorMode };
  return (
    <Background
      onClick={() => setFullScreenMode((current) => !current)}
      sx={
        isFullScreen
          ? {
              ...baseStyles,
              position: "fixed",
              top: 0,
              overflowY: "scroll",
              zIndex: 999,
              bottom: 0,
              left: 0,
              right: 0,
            }
          : baseStyles
      }
    >
      <Box
        sx={{
          alignSelf: "center",
          display: ["grid"],
          gridTemplateColumns: ["1fr"],
          py: [5, "16rem"],
            px: [4],
          gridRowGap: [5, "16rem"],
        }}
      >
        {children}
      </Box>
    </Background>
  );
};
export { DisplayContainer };
