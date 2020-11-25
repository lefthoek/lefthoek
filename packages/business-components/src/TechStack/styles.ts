import {SxStyleProp} from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  gridRowGap: ["1rem"],
  maxWidth: "60rem",
};

export const layerStyles: SxStyleProp = {
  display: "flex",
  p: 5,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "primary",
  border: "5px solid black",
  borderColor: "primary",
};

export const bottomLayerStyles: SxStyleProp = {
  display: "grid",
  gridGap: ["1rem"],
  gridTemplateColumns: "repeat(3, 1fr)",
  "> *": {
    ...layerStyles,
  },
};
