/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { outerWrapperStyles, logoStyles } from "./styles";

type LogoProps = {
  /** optional href */
  to?: string;
  className?: string;
  variant?: "regular" | "alternative" | "negative";
};
const InnerLogo: FunctionComponent<{
  variant?: string;
  className?: string;
}> = ({ className, variant = "regular" }) => {
  const main =
    variant === "regular"
      ? "skyBlue"
      : variant === "negative"
      ? "white"
      : "midnight";
  const shade = variant === "negative" ? "skyBlue" : "white";
  const line = "lobster";
  return (
    <svg
      sx={logoStyles}
      width="101"
      height="121"
      viewBox="0 0 101 121"
      fill="none"
      className={className}
    >
      <path
        d="M74.9187 47.3387L99.5453 56.4944L93.1029 97.0705L68.5803 117.463L62.8652 115.278L74.9187 47.3387Z"
        className={shade}
      />
      <path
        d="M40.317 119.231L13.8201 108.931L32.4199 4.16162L42.8108 1.45654L58.3972 13.8375L40.317 119.231Z"
        className={shade}
      />
      <path
        d="M80.3221 102.065L89.6739 51.3964L60.7871 40.6802L48.4219 111.116L68.7881 118.919L94.142 97.7988L95.285 90.2038L80.3221 102.065Z"
        className={main}
      />
      <path
        d="M42.9146 0L16.9372 6.76268L0 104.978L28.3673 116.006L48.214 4.16165L42.9146 0Z"
        className={main}
      />
      <path
        d="M41.356 121L12.3652 109.764L31.2768 3.12124L43.0185 0L59.7479 13.3173L41.356 121ZM15.2747 108.099L39.2778 117.359L56.9424 14.2537L42.3951 2.7057L33.5628 5.20206L15.2747 108.099Z"
        className={line}
      />
      <path
        d="M68.892 118.919L61.5144 116.11L73.9835 45.5701L101 55.6621L94.2459 97.7988L68.892 118.919ZM64.4239 114.445L68.3724 116.006L91.856 96.4462L98.0905 57.4308L75.9578 49.2115L64.4239 114.445Z"
        className={line}
      />
    </svg>
  );
};

const Logo: FunctionComponent<LogoProps> = ({
  to,
  className,
  variant = "brightGreen",
}) => {
  return to ? (
    <Link sx={outerWrapperStyles} className={className} to={to}>
      <InnerLogo variant={variant} />
    </Link>
  ) : (
    <InnerLogo
      sx={outerWrapperStyles}
      className={className}
      variant={variant}
    />
  );
};

export { Logo };
