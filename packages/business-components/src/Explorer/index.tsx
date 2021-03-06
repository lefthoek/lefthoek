/** @jsx jsx */
import { FunctionComponent } from "react";
import { capitalize } from "voca";
import { jsx, Box, Text } from "theme-ui";
import { cardStyles, ruleStyles } from "./styles";

const Explorer: FunctionComponent<{
  className?: string;
}> = ({ className, ...rest }) => {
  return (
    <Box sx={cardStyles} className={className}>
      {Object.entries(rest).map(([k, v]) => {
        return (
          <section key={k} sx={ruleStyles}>
            <Text>
              <strong>{capitalize(k)}</strong> {JSON.stringify(v)}
            </Text>
          </section>
        );
      })}
    </Box>
  );
};

export { Explorer };
