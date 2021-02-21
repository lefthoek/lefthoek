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
  const [title, icon, paragraph] = children;
  return (
    <Background
      variant={variant}
      className={className}
      sx={{ ...outerWrapper, color: variant === "midnight" ? "muted" : "text" }}
    >
      {title}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr", "2fr 1fr"],
          alignItems: "center",
        }}
      >
        <Box>{icon}</Box>
        <Box sx={{ p: 6 }}>{paragraph}</Box>
      </Box>
    </Background>
  );
};

export { BigIcon };
