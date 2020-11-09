/** @jsx jsx */
import { FunctionComponent } from "react";
import { Input } from "@lefthoek/atoms";
import { jsx, Box, useThemeUI } from "theme-ui";

const InputDisplay: FunctionComponent = () => {
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
          <Input sx={{ mr: 4 }} variant={color}>
            button
          </Input>

          <Input className="hover" variant={color} />
        </Box>
      ))}
    </Box>
  );
};
export { InputDisplay, Input };
