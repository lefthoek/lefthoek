/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";

const CardsContainer: FunctionComponent = ({ children }) => {
  return (
    <Box
      sx={{
        display: ["grid"],
        gridTemplateColumns: ["auto", "1fr 1fr"],
        gridGap: [5],
      }}
    >
      {children}
    </Box>
  );
};
export { CardsContainer };
