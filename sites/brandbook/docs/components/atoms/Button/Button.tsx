/** @jsx jsx */
import { FunctionComponent } from "react";
// @ts-ignore
import { useBreakpointIndex } from "@theme-ui/match-media";
import { Button } from "@lefthoek/atoms";
import { jsx, Box, useThemeUI } from "theme-ui";

const ButtonDisplay: FunctionComponent = () => {
  const breakpointIndex = useBreakpointIndex();
  const { theme } = useThemeUI();
  // @ts-ignore
  const { primaryColors } = theme;
  return (
    <Box sx={{ bg: "white", my: 6, alignContent: "center" }}>
      {Object.keys(primaryColors).map((color) => (
        <Box
          sx={{
            display: "flex",
            mb: 4,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Button sx={{ mr: 4 }} variant={color}>
            button
          </Button>

          {breakpointIndex !== 0 && (
            <Button className="hover" sx={{ mr: 4 }} variant={color}>
              button
            </Button>
          )}
          <Button disabled variant={color}>
            button
          </Button>
        </Box>
      ))}
    </Box>
  );
};
export { ButtonDisplay, Button };
