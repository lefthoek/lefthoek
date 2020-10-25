/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, useThemeUI } from "theme-ui";
import * as icons from "@lefthoek/icons";

const Icon: FunctionComponent<{
  className?: string;
  iconName: string;
}> = ({ className, iconName = "Bespoke" }) => {
  const Icon = icons[iconName] || icons["Placeholder"];
  const { theme } = useThemeUI();
  // @ts-ignore
  const gradients = theme.gradients;
  const midnight = gradients.midnight[3];
  const midnightMedium = gradients.midnight[2];
  const midnightLight = gradients.midnight[1];
  const midnightLightest = gradients.midnight[0];
  const white = gradients.cipria[3];
  const skyBlue = gradients.skyBlue[3];
  const whiteLightest = gradients.cipria[0];
  const lobster = gradients.lobster[3];
  const lobsterLightest = gradients.lobster[0];
  const lobsterLight = gradients.lobster[1];
  const lobsterMedium = gradients.lobster[2];
  const skyBlueMedium = gradients.skyBlue[2];
  const skyBlueLight = gradients.skyBlue[1];
  const skyBlueLightest = gradients.skyBlue[0];
  const colors = {
    midnight,
    midnightMedium,
    midnightLight,
    midnightLightest,
    lobsterLight,
    lobsterMedium,
    lobsterLightest,
    white,
    whiteLightest,
    skyBlue,
    skyBlueMedium,
    skyBlueLight,
    skyBlueLightest,
    lobster,
  };
  return <Icon className={className} colors={colors} />;
};

export { Icon };
