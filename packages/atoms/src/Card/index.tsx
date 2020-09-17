/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading, Card as ThemeCard } from "theme-ui";
import { titleCase } from "voca";
import { overrideStyles } from "./styles";

const Card: FunctionComponent<{
  className?: string;
  simple?: boolean;
  title?: string;
  onClick?: any;
  variant?: string;
}> = ({
  className,
  simple = false,
  children,
  title,
  onClick,
  variant = "skyBlue",
}) => {
  return (
    <ThemeCard
      sx={simple ? overrideStyles({ variant }) : {}}
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
      <Box className="content">{children}</Box>
    </ThemeCard>
  );
};

export { Card };
