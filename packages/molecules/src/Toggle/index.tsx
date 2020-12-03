/** @jsx jsx */
import { Checkbox } from "@lefthoek/atoms";
import { FunctionComponent, useState } from "react";
import { jsx, Heading, Box } from "theme-ui";

const Toggle: FunctionComponent<{
  className?: string;
  label: string;
}> = ({ className, label }) => {
  const [isOn, setOn] = useState(false);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      className={className}
    >
      <Checkbox isOn={isOn} onClick={() => setOn((isOn) => !isOn)} />
      <Heading
        variant="abstract"
        sx={{ color: isOn ? "text" : "secondary", mt: 5 }}
      >
        {label}
      </Heading>
    </Box>
  );
};

export { Toggle };
