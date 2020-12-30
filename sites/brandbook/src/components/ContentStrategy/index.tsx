/** @jsx jsx */
import { FunctionComponent, Dispatch, SetStateAction, useState } from "react";
import Table from "../Table";
import { jsx, Heading, Box } from "theme-ui";
import { format } from "date-fns";

enum Keys {
  BY_CATEGORY = "categories",
  BY_START_DATE = "startDate",
  BY_GENRE = "genre",
  BY_ROLE = "roles",
  BY_CHANNEL = "channel",
  BY_FREQUENCY = "frequency",
}

const groupBy = (data: any[], contentKey: Keys) => {
  return data.reduce((acc: any, item: any) => {
    const temp = { ...item };
    if (Array.isArray(temp[contentKey])) {
      return temp[contentKey].reduce((acc: any, key: any) => {
        return {
          ...acc,
          [key]: acc[key] ? [...acc[key], temp] : [temp],
        };
      }, acc);
    }
    delete temp[contentKey];
    const key = item[contentKey];
    return {
      ...acc,
      [key]: acc[key] ? [...acc[key], temp] : [temp],
    };
  }, {});
};

const ContentStrategy: FunctionComponent<{
  data: Record<Keys, any>[];
  indexKey: Keys;
}> = ({ data, indexKey }) => {
  const d = groupBy(data, indexKey);
  return (
    <Box>
      {Object.entries(d)
        .sort()
        .map(([index, entry]: any) => {
          const d =
            indexKey === Keys.BY_START_DATE
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
  currentIndex: Keys;
  setIndexKey: Dispatch<SetStateAction<Keys>>;
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
      {Object.values(Keys).map((k) => (
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
  data: Record<Keys, any>[];
}> = ({ data }) => {
  const [indexKey, setIndexKey] = useState<Keys>(Keys.BY_CATEGORY);
  return (
    <Box>
      <SelectionBar currentIndex={indexKey} setIndexKey={setIndexKey} />
      <ContentStrategy indexKey={indexKey} data={data} />
    </Box>
  );
};

export default ContentStrategyWrapper;
