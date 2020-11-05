/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const Chat: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <path className="cipriaMedium" d="M396.68,155.86l1.29-.8" />
      <path className="cipriaMedium" d="M259.27,155.86l1.29-.8" />
      <path
        className="white thinStroke"
        d="M406.33,273.11l-.4.4a121.28,121.28,0,0,0,20.51-67.71c0-67-54-121.3-120.56-121.3S185.33,138.81,185.33,205.8s54,121.31,120.55,121.31a119.55,119.55,0,0,0,69.82-22.4l42.06,11.34Z"
      />
      <path
        className="lobsterLightest thinStroke"
        d="M174.24,249c-49,0-88.68,40-88.68,89.24A89.19,89.19,0,0,0,102,390l-8.24,31,31.32-8.45a87.91,87.91,0,0,0,49.17,15c49,0,88.68-39.95,88.68-89.24S223.22,249,174.24,249Z"
      />
      <path
        className="midnight"
        d="M141.24,333.33a7,7,0,0,0,0,9.86,6.93,6.93,0,0,0,11.83-4.93,6.92,6.92,0,0,0-11.83-4.93Z"
      />
      <path
        className="midnight"
        d="M169.35,333.33a7,7,0,0,0,0,9.86,6.87,6.87,0,0,0,9.79,0,6.95,6.95,0,1,0-9.79-9.86Z"
      />
      <path
        className="midnight"
        d="M197.45,333.33a7,7,0,0,0,0,9.86,6.93,6.93,0,0,0,11.83-4.93,6.92,6.92,0,0,0-11.83-4.93Z"
      />
    </svg>
  );
};
