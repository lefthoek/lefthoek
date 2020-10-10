/** @jsx jsx */
import { FunctionComponent, ElementType } from "react";
import { jsx, Heading, Box } from "theme-ui";
import { outerWrapperStyles, headerWrapperStyles } from "./styles";

const Section: FunctionComponent<{
  as?: ElementType<any>;
  title?: string;
  takeAway?: string;
  className?: string;
}> = ({ as = "section", children, className, title, takeAway }) => {
  return (
    <Box as={as} className={className} sx={outerWrapperStyles}>
      <Box className="innerWrapper">
        {title && (
          <Box className="headerWrapper" sx={headerWrapperStyles}>
            <Heading variant="display">{title}</Heading>
            {takeAway && (
              <Heading as="h3" variant="body">
                {takeAway}
              </Heading>
            )}
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
};

export { Section };
