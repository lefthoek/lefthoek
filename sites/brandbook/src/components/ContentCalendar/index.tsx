/** @jsx jsx */
import { FunctionComponent } from "react";
import Table from "../Table";
import { jsx } from "theme-ui";
import { groupBy, formatData } from "./helpers";
import { ContentData } from "./types";

const ContentCalendar: FunctionComponent<{ data: ContentData[] }> = ({
  data,
}) => {
  console.log(data);
  const grouped = groupBy(data, "week");
  const formatted = formatData(grouped);
  return <Table data={formatted} />;
};

export default ContentCalendar;
