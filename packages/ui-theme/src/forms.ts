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
  borderColor: "midnight",
  "::placeholder": {
    color: "accent",
  },
};

export const forms = {
  input,
  skyBlue: input,
  lobster: {
    ...input,
    bg: "lobster",
    "::placeholder": {
      color: "muted",
    },
    "&:hover": {
      bg: gradients.lobster[2],
    },
  },
  midnight: {
    ...input,
    bg: "text",
    "::placeholder": {
      color: "muted",
    },
    "&:hover": {
      bg: gradients.midnight[2],
    },
  },
};
