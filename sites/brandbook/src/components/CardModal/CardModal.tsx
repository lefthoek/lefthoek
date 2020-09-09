/** @jsx jsx */
import { useState, FunctionComponent } from "react";
import { jsx, Box, SxStyleProp } from "theme-ui";
import { Card, Background } from "@lefthoek/atoms";

const CardModal: FunctionComponent<{ title: string; variant?: string }> = ({
  title,
  variant = "skyBlue",
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  console.log(isFullScreen);
  const fullScreenStyles: SxStyleProp = {
    position: "fixed",
    zIndex: 10000,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  const highlightValues = {
    skyBlue: "#AE94FD",
    lobster: "#E39D76",
    brightGreen: "#BCE9D4",
    midnight: "#ADADB8",
  };
  return (
    <Background sx={isFullScreen ? fullScreenStyles : {}} variant={variant}>
      <Box
        className="highlight"
        sx={{
          gridRow: 1,
          gridColumn: 1,
          bg: highlightValues[variant],
          mixBlendMode: "multiply",
          transform: "scaleX(0.95) translate(0%, 10%)",
          transformOrigin: "top center",
          filter: variant === "brightGreen" ? "blur(15px)" : "blur(30px)",
          borderRadius: "20px",
        }}
      >
        <Card variant={variant} title={title} />
      </Box>
      <Box
        variant={variant}
        className="card"
        sx={{
          zIndex: 1,
          gridRow: 1,
          gridColumn: 1,
          borderRadius: "20px",
        }}
      >
        <Card
          onClick={() => setIsFullScreen((current) => !current)}
          variant={variant}
          title={title}
        />
      </Box>
    </Background>
  );
};

export { CardModal };
