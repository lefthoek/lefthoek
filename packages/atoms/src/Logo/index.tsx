/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Link } from "gatsby";
import { logoStyles } from "./styles";

type LogoProps = {
  /** optional href */
  href?: string;
};

const Logo: FunctionComponent<LogoProps> = ({ children, href }) => {
  return href ? (
    <Link sx={logoStyles} to={href}>
      {children}
    </Link>
  ) : (
    <Box sx={logoStyles}>{children}</Box>
  );
};

export { Logo };
