/** @jsx jsx */
import { jsx, Box, useThemeUI } from "theme-ui";
import { FunctionComponent } from "react";
import { Global } from "@emotion/core";
import { Logo } from "@lefthoek/atoms";
import { topBarStyles, logoStyles } from "./styles";

const Base: FunctionComponent<any> = ({ children }) => {
  const { theme }: any = useThemeUI();
  return (
    <Box>
      <Global
        styles={{
          body: { background: theme.colors.text },
        }}
      />
      <Box sx={topBarStyles}>
        <Logo to="/" variant="skyBlue" sx={logoStyles} />
      </Box>
      {children}
    </Box>
  );
};

export { Base };
