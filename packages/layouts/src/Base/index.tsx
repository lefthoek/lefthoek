/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { Logo, Background } from "@lefthoek/atoms";
import { topBarStyles, logoStyles } from "./styles";

const Base: FunctionComponent<any> = ({
  children,
  className,
  variant = "skyBlue",
}) => {
  return (
    <Background variant={variant} className={className}>
      <Box sx={topBarStyles}>
        <Logo
          to="/"
          variant={
            variant === "skyBlue"
              ? "alternative"
              : variant === "cipria"
              ? "regular"
              : "negative"
          }
          sx={logoStyles}
        />
      </Box>
      {children}
    </Background>
  );
};

export { Base };
