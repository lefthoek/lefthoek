/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { cardStyles } from "./styles";

export const Card: FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <article sx={cardStyles} className={className}>
      {children}
    </article>
  );
};
