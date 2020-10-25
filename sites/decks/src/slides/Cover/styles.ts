import { SxStyleProp } from "theme-ui";

const overlayStyles: SxStyleProp = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  py: ["4rem", "4rem", "4rem", "10rem"],
  top: 0,
  px: [5, 5],
  left: [0, 0, "55%"],
  right: 0,
  bottom: 0,
  h5: {
    maxWidth: "15rem",
    m: 0,
    mb: 4,
  },
  a: {
    color: "accent",
  },
  p: {
    maxWidth: "20rem",
    m: 0,
  },
};
export { overlayStyles };
