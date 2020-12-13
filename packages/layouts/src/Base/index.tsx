/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { Logo, Background } from "@lefthoek/atoms";
import { topBarStyles, logoStyles } from "./styles";

const Base: FunctionComponent<any> = ({
  children,
  className,
  variant = "midnight",
}) => {
  return (
    <Background variant={variant} className={className}>
      <Box sx={topBarStyles}>
        <Logo
          to="/"
          variant={variant === "midnight" ? "skyBlue" : "brightGreen"}
          sx={logoStyles}
        />
      </Box>
      {children}
    </Background>
  );
};

export { Base };
