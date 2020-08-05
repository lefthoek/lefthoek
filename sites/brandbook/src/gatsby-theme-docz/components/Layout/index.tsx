/** @jsx jsx */
import { jsx, Box, useThemeUI } from "theme-ui";
import { FunctionComponent } from "react";
// todo: aliases
// @ts-ignore
import { useMenus } from "hooks";
import { Global } from "@emotion/core";
import { Sidebar } from "../Sidebar";

const Layout: FunctionComponent = ({ children }) => {
  const menus = useMenus();
  const { theme } = useThemeUI();
  return (
    <Box>
      <Global styles={{ body: { margin: 0 } }} />
      <Box
        sx={{
          height: "100vh",
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr 3fr"],
        }}
      >
        <Sidebar sx={{ display: ["none", "flex"] }} menus={menus} />
        <Box sx={{ p: 4 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export { Layout };
