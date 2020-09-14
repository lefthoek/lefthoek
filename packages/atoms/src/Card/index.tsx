/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading, Card as ThemeCard } from "theme-ui";
import { titleCase } from "voca";
import { overrideStyles } from "./styles";

const Card: FunctionComponent<{
  className?: string;
  contrast?: boolean;
  title?: string;
  onClick?: any;
  variant?: string;
}> = ({
  className,
  contrast = false,
  children,
  title,
  onClick,
  variant = "skyBlue",
}) => (
  <ThemeCard
    sx={contrast ? overrideStyles({ variant }) : {}}
    onClick={onClick}
    className={className}
    variant={variant}
  >
    {title && (
      <Box className="heading">
        <Heading as="h1" variant="title">
          {titleCase(title)}
        </Heading>
      </Box>
    )}
    {children}
  </ThemeCard>
);

export { Card };
