/** @jsx jsx */
import { Theme } from "@lefthoek/types";
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";

const Checkbox: FunctionComponent<{
  className?: string;
  isOn?: boolean;
  onClick?: () => void;
}> = ({ className, isOn = false, onClick }) => {
  return (
    <Box
      className={className}
      sx={{
        width: "5rem",
        height: "5rem",
        border: "0.5rem solid",
        borderColor: "text",
        bg: ({ gradients }: Theme) => (isOn ? "accent" : gradients.cipria[3]),
      }}
      onClick={onClick}
    />
  );
};

export { Checkbox };
