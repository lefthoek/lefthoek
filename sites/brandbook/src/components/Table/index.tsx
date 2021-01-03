/** @jsx jsx */
import { FunctionComponent } from "react";
import RCTable from "rc-table";
import { jsx } from "theme-ui";
import { format } from "date-fns";

const formatDate = (date: Date) => format(date, "iii MMM dd");

const Table: FunctionComponent<{ data: Record<string, any>[] }> = ({
  data,
}) => {
  const columns: Record<string, any>[] = Object.entries(data[0]).map(
    ([key, value]) => {
      return {
        align: "left",
        title: key.toUpperCase(),
        dataIndex: key,
        key,
        width: 200,
        render: (o: any) => {
          if (o instanceof Date) {
            return formatDate(o);
          }
          if (Array.isArray(value)) {
            return o.map((i: string) => <div>{i}</div>);
          }
          return o;
        },
      };
    }
  );

  return <RCTable tableLayout="auto" columns={columns} data={data} />;
};

export default Table;
