/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import * as icons from "@lefthoek/icons";
import { iconStyles } from "./styles";

const Icon: FunctionComponent<{
  className?: string;
  iconName: string;
}> = ({ className, iconName = "Bespoke" }) => {
  const Icon = icons[iconName] || icons["Placeholder"];
  return <Icon sx={iconStyles} className={className} />;
};

export { Icon };
