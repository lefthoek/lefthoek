/** @jsx jsx */
import { FunctionComponent } from "react";
import { capitalize } from "voca";
import { Card } from "@lefthoek/atoms";
import { jsx, Text } from "theme-ui";
import { cardStyles, ruleStyles } from "./styles";

type Story = {
  "as a": string;
  "I want": string;
  "so that": string;
};
const UserStory: FunctionComponent<{
  className?: string;
  title: string;
  story: Story;
  status?: "rejected";
  rating: number;
}> = ({ className, title, story, status, rating }) => {
  return (
    <Card
      contrast
      className={className}
      title={title}
      sx={cardStyles({ status, rating })}
    >
      {Object.entries(story).map(([k, v]) => {
        return (
          <Text sx={ruleStyles}>
            <strong>{capitalize(k)}</strong> {v}
          </Text>
        );
      })}
    </Card>
  );
};

export { UserStory };
