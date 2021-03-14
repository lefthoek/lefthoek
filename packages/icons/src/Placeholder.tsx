/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const Placeholder: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 126 126" fill="none">
      <circle cx={63} cy={63} r={60} className="lobster" />
    </svg>
  );
};
