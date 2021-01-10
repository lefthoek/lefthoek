/** @jsx jsx */
import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { jsx, Heading, Box } from "theme-ui";
import { ContentKeys } from "@lefthoek/data/src/types";

const SelectionBar: FunctionComponent<{
  currentIndex: ContentKeys;
  setIndexKey: Dispatch<SetStateAction<ContentKeys>>;
}> = ({ currentIndex, setIndexKey }) => {
  return (
    <Box
      sx={{
        display: "flex",
        mb: 4,
        flexDirection: ["column", "row"],
        justifyContent: "space-between",
      }}
    >
      {Object.values(ContentKeys).map((k) => (
        <Heading
          sx={{ color: currentIndex === k ? "secondary" : "text" }}
          variant="titoletto"
          onClick={() => setIndexKey(k)}
        >
          {k}
        </Heading>
      ))}
    </Box>
  );
};

export { SelectionBar };
