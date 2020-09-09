/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading, Card as ThemeCard } from "theme-ui";
import { titleCase } from "voca";

const Card: FunctionComponent<{
  className?: string;
  title?: string;
  onClick?: any;
  variant?: string;
}> = ({ className, title, onClick, variant = "skyBlue", children }) => (
  <ThemeCard onClick={onClick} className={className} variant={variant}>
    {title && (
      <Box className="heading">
        <Heading sx={{ maxWidth: "16rem" }} as="h1" variant="title">
          {titleCase(title)}
        </Heading>
      </Box>
    )}
    {children}
  </ThemeCard>
);

export { Card };
