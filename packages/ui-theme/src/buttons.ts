// @ts-ignore
import { tint } from "@theme-ui/color";

const midnight = {
  display: "flex",
  alignItems: "center",
  justifySelf: "flex-start",
  textAlign: "center",
  justifyContent: "center",
  bg: "text",
  color: "muted",
  fontFamily: "body",
  fontSize: "20px",
  lineHeight: "32px",
  fontWeight: 600,
  height: "48px",
  py: 2,
  px: 5,
  flex: 1,
  letterSpacing: "0.02em",
  borderRadius: "3.5rem",
  "&:hover, &.hover": {
    bg: tint("text", 0.2),
  },
  width: "100%",
  "&:disabled": {
    bg: tint("text", 0.6),
    color: tint("text", 0.4),
  },
  "&:active, &:focus": {
    outline: "none",
  },
};
const skyBlue = {
  ...midnight,
  bg: "primary",
  color: "accent",
  "&:hover, &.hover": {
    bg: tint("primary", 0.2),
  },
  "&:disabled": {
    bg: tint("primary", 0.6),
    color: tint("primary", 0.4),
  },
};
const brightGreen = {
  ...midnight,
  bg: "accent",
  color: "primary",
  "&:hover, &.hover": {
    bg: tint("accent", 0.4),
  },
  "&:disabled": {
    bg: tint("accent", 0.6),
    color: tint("accent", 0.2),
  },
};
const lobster = {
  ...midnight,
  bg: "secondary",
  color: "muted",
  "&:hover, &.hover": {
    bg: tint("secondary", 0.2),
  },
  "&:disabled": {
    bg: tint("secondary", 0.6),
    color: tint("secondary", 0.4),
  },
};
const cipria = {
  ...midnight,
  bg: "muted",
  color: "secondary",
  "&:hover, &.hover": {
    bg: tint("muted", 0.4),
  },
  "&:disabled": {
    bg: tint("muted", 0.6),
    color: tint("secondary", 0.4),
  },
};
export const buttons = {
  primary: midnight,
  midnight,
  skyBlue,
  brightGreen,
  lobster,
  cipria,
  menu: {
    bg: "text",
    color: "bg",
    height: "3rem",
    borderRadius: 0,
    width: "3rem",
    "> svg": {
      fill: "muted",
    },
    "&:active, &:focus": {
      outline: "none",
    },
  },
};
