/** @jsx jsx */
import { FunctionComponent } from "react";
import Table from "../Table";
import { jsx, Heading, Box } from "theme-ui";
import { format } from "date-fns";

type Keys = "byStartDate" | "byGenre" | "byChannel" | "byFrequency";

const ContentStrategy: FunctionComponent<{ data: Record<Keys, any>[] }> = ({
  data,
}) => {
  const indexKey = "byFrequency" as Keys;
  return (
    <Box>
      {Object.entries(data[indexKey])
        .sort()
        .map(([date, entry]: any) => {
          const d =
            indexKey === "byStartDate" ? format(new Date(date), "MMMM") : date;
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

export default ContentStrategy;
