/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text } from "theme-ui";
import { Avatar } from "@lefthoek/atoms";
import { Markdown } from "../Markdown";
import { outerWrapperStyles, metaStyles, markdownStyles } from "./styles";

const Message: FunctionComponent<{
  className?: string;
  message: string;
  name?: string;
}> = ({ className, message, name = "lefthoek" }) => (
  <Box className={className} sx={outerWrapperStyles}>
    <Avatar backgroundColor="white" name={name} />
    <Box>
      <Text sx={metaStyles} variant="smallBody">
        <span className="name">{name}</span>{" "}
        <span className="time">10:00 AM</span>
      </Text>
      <Markdown sx={markdownStyles} text={message} />
    </Box>
  </Box>
);

export { Message };
