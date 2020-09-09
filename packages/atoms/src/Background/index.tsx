/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapperStyles } from "./styles";

const Background: FunctionComponent<{
  className?: string;
  variant?: string;
}> = ({ className, children }) => (
  <Box className={className} sx={outerWrapperStyles}>
    <Box sx={{ zIndex: 2, gridRow: 1, gridColumn: 1 }}>{children}</Box>
    <Box
      sx={{
        gridRow: 1,
        gridColumn: 1,
        bg: "secondary",
        width: "100%",
        height: "100%",
        mixBlendMode: "multiply",
        transform: "scale(0.9) translate(0%, 20%)",
        filter: "blur(100px)",
        borderRadius: "20px",
      }}
    />
    <Box sx={{ gridRow: 1, gridColumn: 1, boxShadow: "0px 16px 24px rgba(237, 189, 164, 0.2)" }}>{children}</Box>
  </Box>
);

export { Background };
