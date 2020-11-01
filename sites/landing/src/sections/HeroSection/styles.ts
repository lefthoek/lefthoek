import { SxStyleProp } from "theme-ui";

export const titleStyles: SxStyleProp = {
  fontSize: ["25px", "26px"],
  lineHeight: ["31px", "33px"],
  maxWidth: ["20rem", "20rem"],
};

export const overlayStyles: SxStyleProp = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  py: ["6rem", "4rem", "4rem", "10rem"],
  top: 0,
  px: [5, 8],
  left: [0, 0, "55%"],
  right: 0,
  bottom: 0,
};

export const callToActionStyles: SxStyleProp = {
  display: ["none", "flex"],
  mt: [0, 5],
  "@media screen and (max-height: 40rem)": {
    display: "none",
    mt: 0,
  },
};
