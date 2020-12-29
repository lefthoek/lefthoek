/** @jsx jsx */
import { FunctionComponent } from "react";
import RCTable from "rc-table";
import { jsx } from "theme-ui";
import { format } from "date-fns";

const Table: FunctionComponent<{ data: Record<string, any>[] }> = ({
  data,
}) => {
  const columns: Record<string, any>[] = Object.entries(data[0]).map(
    ([key, value]) => {
      const isArray = Array.isArray(value);
      return {
        align: "left",
        title: key.toUpperCase(),
        dataIndex: key,
        key,
        width: 200,
        render: (x: any) => (isArray ? x.map((y: any) => <div>{y}</div>) : x),
      };
    }
  );

  const d = data.map(({ startDate, ...x }) => {
    return startDate ? { startDate: format(startDate, "MMMM"), ...x } : x;
  });
  return <RCTable tableLayout="auto" columns={columns} data={d} />;
};

export default Table;
