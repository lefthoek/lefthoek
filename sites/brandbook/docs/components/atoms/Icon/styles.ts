import {SxStyleProp} from "theme-ui";

export const containerStyles: SxStyleProp = {
  display: "grid",
  p: [4],
  gridGap: [4],
  gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr"],
};

export const iconContainerStyles: SxStyleProp = {
  display: "flex",
  p: 4,
  flexDirection: "column",
  alignItems: "center",
};
