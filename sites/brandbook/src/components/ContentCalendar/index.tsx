/** @jsx jsx */
import { FunctionComponent } from "react";
import Table from "../Table";
import { jsx } from "theme-ui";
import { groupBy } from "@lefthoek/data/src/content/helpers";
import { formatData } from "./helpers";
import { ContentData } from "./types";

const ContentCalendar: FunctionComponent<{ data: ContentData[] }> = ({
  data,
}) => {
  const grouped = groupBy(data, "week");
  const formatted = formatData(grouped);
  return <Table data={formatted} />;
};

export default ContentCalendar;
