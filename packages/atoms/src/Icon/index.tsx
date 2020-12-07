/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import * as icons from "@lefthoek/icons";

const styles = {
  ".white": {
    fill: "#fcf2f5",
  },
  cipriaMedium: {
    fill: "#ffdcdc",
  },
  ".lobsterMedium": {
    fill: "#da7c49",
  },
  ".lobsterLight": {
    fill: "#e39d76",
  },
  ".lobsterLightest": {
    fill: "#edbda4",
  },
  ".lobster": {
    fill: "#d15b1b",
  },

  ".skyBlueLight": {
    fill: "#ae94fd",
  },

  ".skyBlueMedium": {
    fill: "#9370fc",
  },
  ".skyBlue": {
    fill: "#784cfb",
  },

  ".midnightLight": {
    fill: "#848595",
  },
  ".midnight": {
    fill: "text",
  },
  ".midnightMedium": {
    fill: "#5b5c71",
  },

  ".skyBlueLightest": {
    fill: "#c9b7fd",
  },
  ".thinStroke": {
    stroke: "text",
    strokeWidth: "7px",
  },
  ".transparent": {
    opacity: 0.75,
  },
  ".lineCap": {
    strokeLinecap: "round",
  },
  ".rounded": {
    stroke: "text",
    strokeWidth: "8px",
  },
  ".lineJoin": {
    strokeLinejoin: "round",
  },
  ".noFill": {
    fill: "none",
  },
  ".join": {
    strokeMiterlimit: 10,
  },
};

const Icon: FunctionComponent<{
  className?: string;
  iconName: string;
}> = ({ className, iconName = "Bespoke" }) => {
  const Icon = icons[iconName] || icons["Placeholder"];
  return <Icon sx={styles} className={className} />;
};

export { Icon };
