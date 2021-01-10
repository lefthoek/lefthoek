/** @jsx jsx */
import { FunctionComponent } from "react";
import RCTable from "rc-table";
import { jsx } from "theme-ui";
import { format } from "date-fns";

const formatDate = (date: Date) => format(date, "iii MMM dd");

const Table: FunctionComponent<{
  data: Record<string, any>[];
  className?: string;
}> = ({ data, className }) => {
  const columns: Record<string, any>[] = Object.entries(data[0]).map(
    ([key, value], index) => {
      return {
        align: "left",
        title: key.toUpperCase(),
        dataIndex: key,
        key,
        width: index === 0 ? 75 : 250,
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

  return (
    <RCTable
      sx={{
        table: {
          border: "1px solid",
          bg: "muted",
          borderCollapse: "collapse",
          th: {
            p: 3,
            border: "1px solid",
            bg: "text",
            color: "white",
            borderColor: "white",
          },
          td: {
            p: 3,
            alignItems: "center",
            border: "1px solid",
            borderColor: "white",
          },
        },
      }}
      className={className}
      tableLayout="auto"
      columns={columns}
      data={data}
    />
  );
};

export default Table;
