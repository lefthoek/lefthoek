/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Base } from "@lefthoek/layouts";

const PageLayout: FunctionComponent = ({ children }: any) => {
  return <Base sx={{ bg: "muted" }}>{children}</Base>;
};

export default PageLayout;
