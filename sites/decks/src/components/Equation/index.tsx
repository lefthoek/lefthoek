/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";

type EquationProps = {
  firstArg: string;
  secondArg: string;
  result: string;
};

const Equation: FunctionComponent<EquationProps> = ({
  firstArg,
  secondArg,
  result,
}) => {
  return (
    <Box sx={{ alignSelf: "center", justifySelf: "center" }}>
      <Heading sx={{ mb: "0.5rem" }} as="h1">
        {firstArg}
      </Heading>
      <Heading as="h1">{secondArg}</Heading>
      <div
        sx={{
          display: "flex",
          borderBottom: "3px solid black",
          borderColor: "primary",
          mx: ["-3rem", "-4rem", "-6rem"],
          mt: "-1rem",
          justifyContent: "flex-end",
        }}
      >
        <Heading sx={{ p: 1, color: "primary" }}>&</Heading>
      </div>
      <Heading sx={{ pt: "1rem" }} as="h1">
        {result}
      </Heading>
    </Box>
  );
};

export default Equation;
