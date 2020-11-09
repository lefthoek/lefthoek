/** @jsx jsx */
import { FunctionComponent } from "react";
import { slugify, capitalize } from "voca";
import { jsx, Heading, Box } from "theme-ui";
import { canvasStyles, cardStyles } from "./styles";

const BusinessModelCanvas: FunctionComponent<{
  className?: string;
}> = ({ className, ...rest }) => {
  return (
    <Box sx={canvasStyles} className={className}>
      {Object.entries(rest).map(([k, v]) => {
        return (
          <Box className={slugify(k)} key={k} sx={cardStyles}>
            <Heading
              as="h4"
              sx={{
                mb: 3,
              }}
            >
              {capitalize(k)}
            </Heading>
            <ul sx={{ listStyle: "none", m: 0, p: 0 }}>
              {v.map((i: string) => (
                <li>{capitalize(i)}</li>
              ))}
            </ul>
          </Box>
        );
      })}
    </Box>
  );
};

export { BusinessModelCanvas };
