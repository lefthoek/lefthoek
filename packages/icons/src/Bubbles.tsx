/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const Bubbles: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <circle
        className="skyBlueMedium stroke join"
        cx="259.1471"
        cy="278.9909"
        r="90.4604"
      />
      <circle
        className="skyBlueLightest stroke join"
        cx="345.314"
        cy="160.9289"
        r="32.5664"
      />
      <circle
        className="skyBlueLightest stroke join"
        cx="338.8605"
        cy="342.7311"
        r="40.9152"
      />
      <circle
        className="skyBlueLightest stroke join"
        cx="141.1519"
        cy="339.529"
        r="16.838"
      />
      <circle
        className="skyBlueLight stroke join"
        cx="141.1519"
        cy="187.8471"
        r="26.9182"
      />
      <circle
        className="skyBlueLight stroke join"
        cx="382.3233"
        cy="223.6062"
        r="15.4431"
      />
    </svg>
  );
};
