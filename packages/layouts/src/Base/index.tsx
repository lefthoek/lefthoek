/** @jsx jsx */
import { jsx, Box, useThemeUI } from "theme-ui";
import { FunctionComponent } from "react";
import { Global } from "@emotion/core";
import { Logo, Background } from "@lefthoek/atoms";
import { topBarStyles, logoStyles } from "./styles";

const Base: FunctionComponent<any> = ({
  children,
  className,
  variant = "midnight",
}) => {
  const { theme }: any = useThemeUI();
  return (
    <Background variant={variant} className={className}>
      <Global
        styles={{
          body: { background: theme.colors.text },
        }}
      />
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
