/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Input as ThemeInput } from "theme-ui";

const Input: FunctionComponent<{
  className?: string;
  variant?: string;
  placeholder?: string;
}> = ({ className, placeholder = "Enter Something", variant = "skyBlue" }) => {
  return (
    <ThemeInput
      className={className}
      variant={variant}
      value=""
      placeholder={placeholder}
    />
  );
};

export { Input };
