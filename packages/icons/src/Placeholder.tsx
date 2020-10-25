/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const Placeholder: FunctionComponent<{
  className?: string;
  colors: Record<string, string>;
}> = ({ className, colors }) => {
  const { lobsterLightest } = colors;
  return (
    <svg className={className} viewBox="0 0 126 126" fill="none">
      <circle cx={63} cy={63} r={60} fill={lobsterLightest} />
    </svg>
  );
};
