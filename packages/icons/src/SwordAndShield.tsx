/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const SwordAndShield: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <rect
        className="white"
        x="130.076"
        y="342.6544"
        width="16.8493"
        height="25.4087"
        transform="translate(-210.7107 202.0169) rotate(-45)"
      />
      <path
        className="skyBlueLightest thinStroke join"
        d="M395.51,116.3221a8.4229,8.4229,0,0,0-7.2537-2.3673l-28.4559,4.4319a8.4231,8.4231,0,0,0-4.6605,2.3674L153.8759,322.0182a8.4243,8.4243,0,0,0,0,11.9142l24.0233,24.0234a8.4246,8.4246,0,0,0,5.9568,2.4679h0a8.4221,8.4221,0,0,0,5.9569-2.4679L391.0781,156.6917a8.4234,8.4234,0,0,0,2.3674-4.6606l4.4319-28.4559A8.4261,8.4261,0,0,0,395.51,116.3221Z"
      />
      <path
        className="skyBlue thinStroke join"
        d="M184.9322,350.9228,160.9088,326.9a8.4231,8.4231,0,0,0-11.9137,0L117.858,358.0361a25.4119,25.4119,0,1,0,35.9375,35.9381l31.1367-31.1366A8.4252,8.4252,0,0,0,184.9322,350.9228Z"
      />
      <path
        className="white thinStroke join"
        d="M215.4319,346.0073,165.8249,296.4a8.4231,8.4231,0,0,0-11.9137,0l-17.7076,17.7076a8.4231,8.4231,0,0,0,0,11.9137l49.6075,49.6069a8.4231,8.4231,0,0,0,11.9137,0l17.7076-17.7071a8.4223,8.4223,0,0,0,0-11.9136Z"
      />
      <path
        className="lobsterMedium thinStroke join"
        d="M278.4723,162.4064A119.5054,119.5054,0,1,0,397.9774,281.9121,119.64,119.64,0,0,0,278.4723,162.4064Z"
      />
      <path
        className="skyBlue thinStroke join"
        d="M278.4723,202.54a79.3718,79.3718,0,1,0,79.372,79.372A79.462,79.462,0,0,0,278.4723,202.54Z"
      />
      <path
        className="white thinStroke join"
        d="M322.802,269.3391a8.4224,8.4224,0,0,0-6.801-5.7333L295.29,260.5964l-9.2621-18.768a8.4245,8.4245,0,0,0-15.11,0l-9.2621,18.768-20.7113,3.0094a8.4246,8.4246,0,0,0-4.6695,14.37l14.987,14.609-3.5378,20.6276a8.4251,8.4251,0,0,0,12.2237,8.8819l18.5248-9.74,18.5248,9.74a8.4247,8.4247,0,0,0,12.2237-8.8813l-3.5378-20.6276,14.987-14.609A8.4259,8.4259,0,0,0,322.802,269.3391Z"
      />
    </svg>
  );
};
