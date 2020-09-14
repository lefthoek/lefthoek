/** @jsx jsx */
import { Card } from "@lefthoek/atoms";
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";

const DisplayContainer: FunctionComponent = ({ children }) => {
  return (
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
  );
};
export { DisplayContainer, Card };
