/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading } from "theme-ui";

const Left: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <Heading sx={{ color: "accent" }} className={className}>
      Left
    </Heading>
  );
};

const Hoek: FunctionComponent<{ className?: string }> = ({ className }) => {
  return <Heading className={className}>Hoek</Heading>;
};

export { Left, Hoek };
