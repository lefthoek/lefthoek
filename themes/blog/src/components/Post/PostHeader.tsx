/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading, Text, Box } from "theme-ui";

const PostHeader: FunctionComponent<{
  title: string;
  order: number;
  excerpt: string;
}> = ({ title, order, excerpt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "primary",
      }}
    >
      <Heading
        sx={{
          fontSize: ["32px", "42px"],
          py: [5],
          fontFamily: "heading",
          lineHeight: ["34px", "42px"],
        }}
      >
        {`00${order}`}
      </Heading>
      <Heading variant="display">{title}</Heading>
      <Box sx={{ py: 5, pb: 8, maxWidth: "29rem" }}>
        <Text>{excerpt}</Text>
      </Box>
    </Box>
  );
};

export default PostHeader;
