/** @jsx jsx */
import { FunctionComponent, ReactNode, ReactNodeArray } from "react";
import { jsx } from "theme-ui";
import { Background } from "@lefthoek/atoms";
import { outerWrapper } from "./styles";

const Quote: FunctionComponent<{
  children: ReactNode | ReactNodeArray;
  index: number;
  variant?: string;
  className?: string;
}> = ({ children, className, variant = "brightGreen" }) => {
  return (
    <Background
      variant={variant}
      className={className}
      sx={{
        ...outerWrapper,
        color: variant === "midnight" ? "muted" : "primary",
      }}
    >
      {children}
    </Background>
  );
};

export { Quote };
