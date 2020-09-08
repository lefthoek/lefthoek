/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading, Card as ThemeCard } from "theme-ui";
import { titleCase } from "voca";

const Card: FunctionComponent<{
  className?: string;
  title?: string;
  variant?: string;
}> = ({ className, children, title, variant = "primary" }) => {
  return (
    <ThemeCard className={className} variant={variant}>
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
};

export { Card };
