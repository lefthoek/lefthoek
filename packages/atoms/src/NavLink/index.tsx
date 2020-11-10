/** @jsx jsx */
import { jsx, Text, Heading } from "theme-ui";
import { Link } from "gatsby";
import { FunctionComponent } from "react";
import { linkStyles, entryStyles, headingStyles } from "./styles";

type InnerLinkProps = {
  title: string;
  className?: string;
  inverse?: boolean;
  isActive?: boolean;
  variant?: "titoletto" | "titolettoAlt" | "link";
  onClick?: () => void;
};

const InnerLink: FunctionComponent<InnerLinkProps> = ({
  className,
  isActive = false,
  variant = "link",
  inverse = true,
  onClick,
  title,
}) => {
  return variant === "link" ? (
    <Text
      variant="smallBody"
      className={className}
      sx={entryStyles({ isActive, inverse })}
    >
      {title}
    </Text>
  ) : (
    <Heading
      className={className}
      variant={variant}
      sx={headingStyles({
        isActive,
        inverse,
        isSmallHeading: variant === "titolettoAlt",
      })}
      onClick={onClick}
    >
      {title}
    </Heading>
  );
};

export const NavLink: FunctionComponent<InnerLinkProps & { to?: string }> = ({
  title,
  className,
  isActive = false,
  onClick,
  inverse = false,
  variant = "link",
  to,
}) => {
  return to ? (
    <Link key={title} sx={linkStyles} to={to}>
      <InnerLink
        variant={variant}
        inverse={inverse}
        className={className}
        isActive={isActive}
        onClick={onClick}
        title={title}
      />
    </Link>
  ) : (
    <InnerLink
      inverse={inverse}
      variant={variant}
      className={className}
      isActive={isActive}
      onClick={onClick}
      title={title}
    />
  );
};
