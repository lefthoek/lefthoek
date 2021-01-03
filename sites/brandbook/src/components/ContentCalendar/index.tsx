/** @jsx jsx */
import { FunctionComponent } from "react";
import Table from "../Table";
import { jsx } from "theme-ui";
import { prepareData, groupBy, formatData } from "./helpers";
import { ContentData } from "./types";

const ContentCalendar: FunctionComponent<{ data: ContentData[] }> = ({
  data,
}) => {
  const weeks = prepareData(data);
  const grouped = groupBy(weeks, "week");
  const formatted = formatData(grouped);
  return <Table data={formatted} />;
};

export default ContentCalendar;
