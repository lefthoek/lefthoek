import {tint} from "@theme-ui/color";

export const primaryColors = {
  cipria: "#FCF2F5",
  midnight: "#32334E",
  brightGreen: "#90FFCC",
  skyBlue: "#784CFB",
  lobster: "#D15B1B",
};

const gradientPairs = Object.entries(primaryColors).map(([k, colorValue]) => {
  const values = [0.6, 0.4, 0.2, 0];
  // @ts-ignore
  const tints = values.map((opacity) => tint(colorValue, opacity)());
  return [k, tints];
});

// @ts-ignore
export const gradients = Object.fromEntries(gradientPairs);

export const colors = {
  text: primaryColors.midnight,
  muted: primaryColors.cipria,
  primary: primaryColors.skyBlue,
  background: "white",
  accent: primaryColors.brightGreen,
  highlight: primaryColors.brightGreen,
  secondary: primaryColors.lobster,
};
