/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Input as ThemeInput } from "theme-ui";

const Input: FunctionComponent<{
  className?: string;
  name?: string;
  type?: "text" | "email";
  variant?: string;
  placeholder?: string;
}> = ({
  className,
  name,
  type = "text",
  placeholder = "Enter Something",
  variant = "skyBlue",
}) => {
  return (
    <ThemeInput
      name={name}
      type={type}
      className={className}
      variant={variant}
      placeholder={placeholder}
    />
  );
};

export { Input };
