/** @jsx jsx */
import { FunctionComponent, Fragment, useState } from "react";
import { SelectionBar } from "../SelectionBar";
import Table from "../Table";
import { jsx, Heading } from "theme-ui";
import { ContentKeys } from "@lefthoek/data/src/types";
import { groupBy } from "@lefthoek/data/src/content/helpers";
import { isValid, format } from "date-fns";

const ContentStrategy: FunctionComponent<{
  data: Record<ContentKeys, any>[];
}> = ({ data }) => {
  const [indexKey, setIndexKey] = useState<ContentKeys>(
    ContentKeys.BY_CATEGORY
  );
  const selectedData = groupBy(data, indexKey);
  return (
    <Fragment>
      <SelectionBar currentIndex={indexKey} setIndexKey={setIndexKey} />
      {Object.entries(selectedData)
        .sort()
        .map(([index, entry]: any) => {
          const date = new Date(index);
          return (
            <Fragment>
              <Heading sx={{ mt: 5, mb: 4 }}>
                {isValid(date) ? format(date, "MMMM") : index}
              </Heading>
              <Table data={entry} />
            </Fragment>
          );
        })}
    </Fragment>
  );
};

export default ContentStrategy;
