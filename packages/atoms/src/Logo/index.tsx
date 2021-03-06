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
      viewBox="0 0 102 122"
      fill="none"
      className={className}
    >
      <path
        d="M59.5999 13L43.2 -6.07967e-06L31.9 3L14.7 111.3L41.2 121.3L59.5999 13Z"
        className={shade}
      />
      <path
        d="M73.2 45.7L60.3 116.3L68.2 119.3L94.3001 98.5L101.2 56.1L73.2 45.7Z"
        className={shade}
      />
      <path
        d="M79.5999 104.8L89.0999 51.6L60.0999 40.8V40.7L47.7 111.5L68.1999 119.3L92.5 97.4L93 94.3999L79.5999 104.8Z"
        className={main}
      />
      <path
        d="M43.3 0L17.1 7L0 105.7L28.5 116.5H28.6L48.5 4.3L43.3 0Z"
        className={main}
      />
      <path
        d="M40.4191 119.926L14.1273 109.764L32.7741 3.80257L42.9718 1.09521L58.5149 13.416L40.4191 119.926Z"
        stroke="#d15b1b"
        stroke-width="2"
      />
      <path
        d="M74.8001 48.4L99 57.4L92.5 97.4L68 117L62.6 115.2L74.8001 48.4ZM73.2 45.7L60.3 116.3L68.2 119.3L94.3001 98.5L101.2 56.1L73.2 45.7Z"
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
