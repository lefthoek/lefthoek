/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Text } from "theme-ui";
import { Avatar } from "@lefthoek/atoms";
import { outerWrapperStyles } from "./styles";

const Message: FunctionComponent<{
  className?: string;
  name?: string;
}> = ({ className, name = "lefthoek" }) => (
  <Box className={className} sx={outerWrapperStyles}>
    <Avatar backgroundColor="white" name={name} />
    <Box>
      <Text variant="smallBody">
        <span sx={{ fontWeight: 700 }}>{name}</span>{" "}
        <span sx={{ color: (theme) => theme.gradients.midnight[0] }}>
          10:00 AM
        </span>
      </Text>
      <Text
        sx={{ color: (theme) => theme.gradients.midnight[1], fontWeight: 400 }}
      >
        Good Morning, Alicia!
      </Text>
      <Text
        sx={{ color: (theme) => theme.gradients.midnight[1], fontWeight: 400 }}
      >
        Hope you enjoyed your break.
      </Text>
      <Text
        sx={{ color: (theme) => theme.gradients.midnight[1], fontWeight: 400 }}
      >
        These things have been decided in your absence:
      </Text>
      <ul
        sx={{
          listStyle: "square",
          listStylePosition: "inside",
          fontWeight: 400,
          p: 0,
          m: 0,
          color: (theme) => theme.gradients.midnight[1],
        }}
      >
        <li>
          Headings should be formatted in{" "}
          <span sx={{ fontWeight: 500 }}>Titlecase</span> from now on
        </li>
        <li>
          all design changes should be tested on our brandbook site before
          updating them on the homepage
        </li>
      </ul>
      <Text
        sx={{ color: (theme) => theme.gradients.midnight[1], fontWeight: 400 }}
      >
        The following proposal is waiting for your approval
      </Text>

      <ul
        sx={{
          listStyle: "square",
          listStylePosition: "inside",
          fontWeight: 400,
          p: 0,
          m: 0,
          color: (theme) => theme.gradients.midnight[1],
        }}
      >
        <li>
          change the primary brand color from{" "}
          <span
            sx={{
              bg: (theme) => theme.gradients.skyBlue[0],
              color: "accent",
            }}
          >
            bright green
          </span>{" "}
          to{" "}
          <span
            sx={{
              bg: (theme) => theme.gradients.brightGreen[0],
              color: "primary",
            }}
          >
            sky blue
          </span>{" "}
        </li>
      </ul>
    </Box>
  </Box>
);

export { Message };
