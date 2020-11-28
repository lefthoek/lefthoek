/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const Diamond: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <polygon
        className="skyBlueLightest"
        points="361 121.85 151 121.85 98.5 213.73 256 391.13 413.5 213.73 361 121.85"
      />
      <polygon
        className="skyBlueMedium"
        points="140.87 213.73 230.05 314.18 200.32 213.73 140.87 213.73"
      />
      <polygon
        className="skyBlueLight"
        points="171.55 160.59 140.87 213.73 202.23 213.73 171.55 160.59"
      />
      <polygon
        className="skyBlueLight"
        points="382.82 160.59 352.14 213.73 413.5 213.73 382.82 160.59"
      />
      <polygon
        className="skyBlueMedium"
        points="219.99 121.05 183.98 183.42 202.23 213.73 256 120.87 219.99 121.05"
      />
      <polygon
        className="skyBlueLight"
        points="300.47 341.04 349.39 213.73 244.39 213.73 275.56 319.06 300.47 341.04"
      />
      <polygon
        className="noFill lineJoin rounded"
        points="151 121.85 98.5 213.73 203.5 213.73 151 121.85"
      />
      <polygon
        className="noFill lineJoin rounded"
        points="256 121.85 203.5 213.73 308.5 213.73 256 121.85"
      />
      <polygon
        className="noFill lineJoin rounded"
        points="203.5 212.74 256 120.87 151 120.87 203.5 212.74"
      />
      <polygon
        className="skyBlueMedium lineJoin rounded"
        points="308.5 212.74 361 120.87 256 120.87 308.5 212.74"
      />
      <polygon
        className="noFill lineJoin rounded"
        points="361 121.85 308.5 213.73 413.5 213.73 361 121.85"
      />
      <polygon
        className="noFill lineJoin rounded"
        points="256 391.13 308.5 213.73 203.5 213.73 256 391.13"
      />
      <polygon
        className="noFill lineJoin rounded"
        points="98.5 213.73 256 391.13 203.5 213.73 98.5 213.73"
      />
      <polygon
        className="skyBlueMedium lineJoin rounded"
        points="413.5 213.73 256 391.13 308.5 213.73 413.5 213.73"
      />
    </svg>
  );
};
