import { gradients } from "./colors";

const input = {
  bg: "primary",
  flex: [1, 2],
  mr: [0, 4],
  fontFamily: "body",
  borderRadius: "4px",
  px: 3,
  py: 2,
  width: "100%",
  border: "1px solid black",
  color: "accent",
  borderColor: "midnight",
  "::placeholder": {
    color: gradients.brightGreen[1],
  },
  "&:hover, &.hover": {
    bg: gradients.skyBlue[2],
  },
};

export const forms = {
  input,
  skyBlue: input,
  lobster: {
    ...input,
    bg: "secondary",
    color: "muted",
    "::placeholder": {
      color: gradients.lobster[0],
    },
    "&:hover, &.hover": {
      bg: gradients.lobster[2],
    },
  },
  midnight: {
    ...input,
    color: "muted",
    bg: "text",
    borderColor: "muted",
    "::placeholder": {
      color: gradients.midnight[0],
    },
    "&:hover, &.hover": {
      bg: gradients.midnight[2],
    },
  },
  brightGreen: {
    ...input,
    color: "primary",
    borderColor: "primary",
    bg: "accent",
    "::placeholder": {
      color: gradients.skyBlue[0],
    },
    "&:hover, &.hover": {
      bg: gradients.brightGreen[1],
    },
  },
  cipria: {
    ...input,
    color: "secondary",
    bg: "muted",
    "::placeholder": {
      color: gradients.lobster[0],
    },
    "&:hover, &.hover": {
      bg: gradients.cipria[1],
    },
  },
};
