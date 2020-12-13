import { Logo } from "@lefthoek/atoms";
import { Box } from "theme-ui";

const Logos = () => {
  const variants = ["skyBlue", "lobster", "brightGreen", "midnight"];
  return (
    <Box sx={{ display: "grid", bg: "white", gridTemplateColumns: "1fr 1fr" }}>
      {variants.map((variant) => (
        <Logo variant={variant} />
      ))}
    </Box>
  );
};

export { Logo, Logos };
