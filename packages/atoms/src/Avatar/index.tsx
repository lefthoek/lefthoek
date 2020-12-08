/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { outerWrapperStyles } from "./styles";
import { Theme } from "@lefthoek/types";

const Circle: FunctionComponent<{
  className?: string;
  backgroundColor?: string;
  color?: string;
}> = ({ className, backgroundColor = "muted", color = "accent" }) => {
  return (
    <svg className={className} viewBox="0 0 120 120">
      <circle
        sx={{
          fill: backgroundColor,
        }}
        cx="60"
        cy="60"
        r="60"
      />
      <circle
        sx={{
          fill: color,
        }}
        cx="60"
        cy="60"
        r="40"
      />
    </svg>
  );
};

const Avatar: FunctionComponent<{
  className?: string;
  name?: string;
  backgroundColor?: string;
  statusColor?: string;
  variant?: string;
}> = ({
  className,
  name = "yeehaa",
  backgroundColor = "muted",
  statusColor = "accent",
  variant = "skyBlue",
}) => {
  const initial = name[0].toUpperCase();
  return (
    <Box className={className} sx={outerWrapperStyles({ variant })}>
      <Circle
        backgroundColor={backgroundColor}
        color={statusColor}
        sx={{
          position: "absolute",
          bottom: "-2px",
          right: "-2px",
          width: "12px",
          height: "12px",
        }}
      />
      <Heading
        sx={{
          color: ({ primaryColors }: Theme) => primaryColors[variant],
        }}
      >
        {initial}
      </Heading>
    </Box>
  );
};

export { Avatar };
