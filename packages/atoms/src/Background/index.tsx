/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapperStyles } from "./styles";

const Background: FunctionComponent<{
  className?: string;
  onClick?: () => void;
  variant?: string;
}> = ({ onClick, className, children, variant = "skyBlue" }) => (
  <Box
    onClick={onClick}
    className={className}
    sx={outerWrapperStyles({ variant })}
  >
    {children}
  </Box>
);

export { Background };
