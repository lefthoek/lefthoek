/** @jsx jsx */
import { FunctionComponent } from "react";
import { titleCase, capitalize } from "voca";
import { jsx, Card, Heading, Text } from "theme-ui";
import { cardStyles, titleStyles, ruleStyles } from "./styles";

type Story = {
  "as a": string;
  "I want": string;
  "so that": string;
};
const UserStory: FunctionComponent<{
  className?: string;
  title: string;
  story: Story;
}> = ({ className, title, story }) => {
  return (
    <Card sx={cardStyles} className={className}>
      <section sx={titleStyles}>
        <Heading as="h1">{titleCase(title)}</Heading>
      </section>
      {Object.entries(story).map(([k, v]) => {
        return (
          <section key={k} sx={ruleStyles}>
            <Text>
              <strong>{capitalize(k)}</strong> {v}
            </Text>
          </section>
        );
      })}
    </Card>
  );
};

export { UserStory };
