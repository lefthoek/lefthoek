/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const BasicShapes: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <rect
        className="lobster stroke join"
        x="129.2822"
        y="126.8066"
        width="104.9604"
        height="104.9604"
      />
      <circle
        className="skyBlue stroke join"
        cx="328.2018"
        cy="255.2021"
        r="59.2782"
      />
      <polygon
        className="white stroke join"
        points="221.272 290.002 160.037 396.065 282.508 396.065 221.272 290.002"
      />
    </svg>
  );
};
