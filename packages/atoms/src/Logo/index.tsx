/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Link } from "gatsby";
import { logoStyles } from "./styles";

type LogoProps = {
  /** optional href */
  href?: string;
  className?: string;
};

const Logo: FunctionComponent<LogoProps> = ({ children, href, className }) => {
  return href ? (
    <Link sx={logoStyles} className={className} to={href}>
      {children}
    </Link>
  ) : (
    <Box sx={logoStyles} className={className}>
      {children}
    </Box>
  );
};

export { Logo };
