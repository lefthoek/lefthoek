/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const Different: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <path
        className="skyBlueLightest"
        d="M112.24,400.92V111.08L256.06,254.15,403.61,400.92Z"
      />
      <path
        className="white"
        d="M403.61,111.08V400.92L259.78,257.85,112.24,111.08Z"
      />
      <path
        className="midnight"
        d="M365.83,188.41a3.65,3.65,0,0,0,4-3.63V148.37a3.71,3.71,0,0,0-3.71-3.69H329.73a3.79,3.79,0,0,0-3.86,3.32,3.57,3.57,0,0,0,.94,2.79,3.68,3.68,0,0,0,2.71,1.19H357.3l-54.45,54.08a3.65,3.65,0,0,0,0,5.16,3.68,3.68,0,0,0,5.18,0l54.46-54.09v27.44A3.79,3.79,0,0,0,365.83,188.41Z"
      />
      <path
        className="midnight"
        d="M213,300.78a3.69,3.69,0,0,0-5.19,0l-54.46,54.09V327.43a3.79,3.79,0,0,0-3.33-3.84l-.34,0a3.66,3.66,0,0,0-3.66,3.65v36.41a3.7,3.7,0,0,0,3.71,3.69h36.39A3.8,3.8,0,0,0,190,364a3.58,3.58,0,0,0-.95-2.79,3.66,3.66,0,0,0-2.7-1.19H158.55L213,305.94a3.58,3.58,0,0,0,1.08-2.58A3.63,3.63,0,0,0,213,300.78Z"
      />
      <rect
        className="thinStroke join lineCap noFill lineJoin"
        x="111.92"
        y="111.08"
        width="292"
        height="289.85"
      />
      <line
        className="join noFill thinStroke lineCap"
        x1="111.92"
        y1="111.08"
        x2="403.92"
        y2="400.92"
      />
    </svg>
  );
};
