/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading, Card as ThemeCard } from "theme-ui";
import { titleCase } from "voca";

const Card: FunctionComponent<{
  className?: string;
  title?: string;
  onClick?: any;
  variant?: string;
}> = ({ className, children, title, onClick, variant = "skyBlue" }) => (
  <ThemeCard onClick={onClick} className={className} variant={variant}>
    {title && (
      <Box className="heading">
        <Heading as="h1" variant="title">
          {titleCase(title)}
        </Heading>
        {children}
      </Box>
    )}
    {children}
  </ThemeCard>
);

export { Card };
