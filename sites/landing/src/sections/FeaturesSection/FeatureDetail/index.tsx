/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, AspectRatio } from "theme-ui";
import { selectionWrapper } from "./styles";
import { Markdown } from "../../../components";

const FeatureDetail: FunctionComponent<{
  image: any;
  text: string;
  className?: string;
}> = ({ text, className }) => {
  return (
    <Box className={className} sx={selectionWrapper}>
      <Markdown sx={{ flex: 2, mr: [0, 6] }} text={text} />
      <Box
        sx={{
          flex: 3,
          bg: "muted",
          border: "1px solid",
          borderColor: ({ gradients }) => gradients.midnight[0],
          "&:hover": {
            bg: ({ gradients }) => gradients.lobster[0],
          },
        }}
      >
        <AspectRatio ratio={3 / 2} />
      </Box>
    </Box>
  );
};

export { FeatureDetail };
