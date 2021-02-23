/** @jsx jsx */
import { FunctionComponent, ReactNode, ReactNodeArray } from "react";
import { jsx, Box } from "theme-ui";
import { Background } from "@lefthoek/atoms";
import { outerWrapper } from "./styles";

const BigIcon: FunctionComponent<{
  children: ReactNode | ReactNodeArray;
  index: number;
  variant?: string;
  className?: string;
}> = ({ children, className, variant = "cipria" }) => {
  return (
    <Background
      variant={variant}
      className={className}
      sx={{
        ...outerWrapper,
        color: variant === "midnight" ? "muted" : "text",
      }}
    >
      {children}
    </Background>
  );
};

export { BigIcon };
