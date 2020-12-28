/** @jsx jsx */
import { FunctionComponent } from "react";
import RCTable from "rc-table";
import { jsx } from "theme-ui";

const Table: FunctionComponent<{ data: Record<string, any>[] }> = ({
  data,
}) => {
  const columns: Record<string, any>[] = Object.entries(data[0]).map(
    ([key]) => {
      return {
        title: key.toUpperCase(),
        dataIndex: key,
        key,
      };
    }
  );
  return <RCTable tableLayout="fixed" columns={columns} data={data} />;
};

export default Table;
