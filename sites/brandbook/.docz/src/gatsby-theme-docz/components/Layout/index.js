/** @jsx jsx */
import { useRef, useState } from "react";
import { jsx, Layout as BaseLayout, Main } from "theme-ui";
import { Global } from "@emotion/core";

import global from "gatsby-theme-docz/src/theme/global";
import { Sidebar } from "gatsby-theme-docz/src/components/Sidebar";
import { MainContainer } from "gatsby-theme-docz/src/components/MainContainer";
import * as styles from "./styles";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const nav = useRef();

  return (
    <BaseLayout sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
      <Global styles={global} />
      <Main sx={styles.main}>
        <div sx={styles.wrapper}>
          <button onClick={() => setOpen(!open)}>
            {open ? "close" : "open"}
          </button>
          <MainContainer data-testid="main-container">{children}</MainContainer>
        </div>
      </Main>
    </BaseLayout>
  );
};
