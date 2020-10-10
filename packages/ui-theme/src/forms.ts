import { gradients } from "./colors";

const input = {
  bg: gradients.skyBlue[2],
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
    color: gradients.skyBlue[1],
  },
};

export const forms = {
  input,
  skyBlue: input,
  lobster: {
    ...input,
    bg: gradients.lobster[2],
    borderColor: gradients.midnight[2],
    "::placeholder": {
      color: gradients.lobster[0],
    },
  },
};
