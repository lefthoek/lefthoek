/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Entry, useCurrentDoc } from "docz";
import { FunctionComponent } from "react";
import { MenuItem } from "../MenuItem";

type Doc =
  | Entry
  | {
      name: string;
      route?: string;
      entries: Entry[] | Doc;
    };

export const Sidebar: FunctionComponent<{
  menus: Doc[];
  className?: string;
}> = ({ menus, className }) => {
  const currentDoc = useCurrentDoc();

  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "space-between",
        flexDirection: "column",
        overflowY: "scroll",
        bg: "text",
        px: [6,7],
        py: 7,
      }}
    >
      <Box>
        {menus.map((menu: Doc) => (
          <MenuItem currentDoc={currentDoc} key={menu.name} menu={menu} />
        ))}
      </Box>
    </Box>
  );
};
