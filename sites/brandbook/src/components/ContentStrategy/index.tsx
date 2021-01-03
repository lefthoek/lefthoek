/** @jsx jsx */
import { FunctionComponent, Dispatch, SetStateAction, useState } from "react";
import Table from "../Table";
import { jsx, Heading, Box } from "theme-ui";
import { ContentKeys } from "@lefthoek/data/src/types";
import { groupBy } from "@lefthoek/data/src/content/helpers";
import { format } from "date-fns";

const ContentStrategy: FunctionComponent<{
  data: Record<ContentKeys, any>[];
  indexKey: ContentKeys;
}> = ({ data, indexKey }) => {
  const d = groupBy(data, indexKey);
  return (
    <Box>
      {Object.entries(d)
        .sort()
        .map(([index, entry]: any) => {
          const d =
            indexKey === ContentKeys.BY_START_DATE
              ? format(new Date(index), "MMMM")
              : index;
          return (
            <Box sx={{ mb: 5 }}>
              <Heading sx={{ mb: 3 }}>{d}</Heading>
              <Table data={entry} />
            </Box>
          );
        })}
    </Box>
  );
};

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

const ContentStrategyWrapper: FunctionComponent<{
  data: Record<ContentKeys, any>[];
}> = ({ data }) => {
  const [indexKey, setIndexKey] = useState<ContentKeys>(
    ContentKeys.BY_CATEGORY
  );
  return (
    <Box>
      <SelectionBar currentIndex={indexKey} setIndexKey={setIndexKey} />
      <ContentStrategy indexKey={indexKey} data={data} />
    </Box>
  );
};

export default ContentStrategyWrapper;
